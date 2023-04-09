import path from "path"
import fs from "fs/promises"
import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import childProcess from "child_process"
import { promisify } from "util"

const execute = promisify(childProcess.exec)

interface Args {
  main: string
  module: string
  types: string
}

const generatePackageJson = async ({ main, module, types }: yargs.ArgumentsCamelCase<Args>) => {
  const workspacePath = process.cwd()
  const packageJsonPath = path.resolve(workspacePath, "./package.json")

  console.log("Generate package json for npm publish 🚀")
  console.log(`
    🖍️workspace path
      - ${workspacePath}
  `)

  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, { encoding: "utf-8" }))
  packageJson.main = main
  packageJson.module = module
  packageJson.types = types

  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson))
  const command = ["yarn run -T prettier", "--write", packageJsonPath].join(" ")
  await execute(command, { env: process.env })
}

yargs(hideBin(process.argv))
  .command({
    command: "$0",
    describe: "Generate package.json for npm publish",
    builder: (args) =>
      args
        .option("main", {
          describe: "Entry point for commonjs",
          type: "string",
          default: "./dist/index.js"
        })
        .option("module", {
          describe: "Entry point for es module",
          type: "string",
          default: "./dist/esm/index.js"
        })
        .option("types", {
          describe: "Entry point for type declaration file",
          type: "string",
          default: "./dist/types/index.d.js"
        }),
    handler: generatePackageJson
  })
  .help()
  .parse()
