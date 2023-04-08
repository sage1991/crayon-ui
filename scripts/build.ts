import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import path from "path"
import childProcess from "child_process"
import { promisify } from "util"

const execute = promisify(childProcess.exec)
const supportedModules = ["commonjs", "esm"]

interface Arguments {
  module?: string
  verbose?: boolean
}

const build = async ({ module = "esm", verbose = false }: yargs.ArgumentsCamelCase<Arguments>) => {
  const isSupportedModuleType = supportedModules.includes(module)
  if (!isSupportedModuleType) {
    throw new Error(`Invalid module type ${module}. Choose one of [${supportedModules.join(", ")}]`)
  }

  const configFilePath = path.resolve(__dirname, `./babel.${module}.json`)
  const workspacePath = process.cwd()
  const srcDir = path.resolve(workspacePath, "./src")
  const outDir = path.resolve(workspacePath, module === "esm" ? "./dist/esm" : "./dist")
  const extensions = [".js", ".ts", ".tsx"]
  const ignore = [
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*.spec.ts",
    "**/*.spec.tsx",
    "**/*.stories.tsx",
    "**/*.d.ts"
  ]

  const command = [
    "yarn run -T babel",
    `--extensions "${extensions.join(",")}"`,
    `--out-dir ${outDir}`,
    `--config-file ${configFilePath}`,
    `--ignore "${ignore.join(`"."`)}"`,
    srcDir
  ].join(" ")

  if (verbose) {
    console.log("Start to build 🚀")
    console.log(`workspace path: ${workspacePath}`)
    console.log("build command: ")
    console.log(command)
  }

  const { stderr, stdout } = await execute(command, { env: { ...process.env } })
  if (stderr) {
    throw new Error(`${command} failed with\n${stderr}`)
  }

  if (verbose) {
    console.log(stdout)
  }
}

yargs(hideBin(process.argv))
  .command({
    command: "$0 <module>",
    describe: "Build packages",
    builder: (args) =>
      args
        .positional("module", {
          describe: `Valid module: ${supportedModules.join(", ")}`,
          type: "string"
        })
        .option("verbose", {
          type: "boolean"
        }),
    handler: build
  })
  .help()
  .parse()
