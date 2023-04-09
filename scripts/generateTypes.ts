import path from "path"
import childProcess from "child_process"
import { promisify } from "util"

const execute = promisify(childProcess.exec)

const generateTypes = async () => {
  const workspacePath = process.cwd()
  const tsConfigPath = path.resolve(workspacePath, "./tsconfig.build.json")
  const command = ["yarn run -T tsc", `--build ${tsConfigPath}`, "--verbose"].join(" ")

  console.log("Start to generate types 🚀")
  console.log(`
    🖍️workspace path
      - ${workspacePath}
    🖍️build command
      - ${command}
  `)

  const { stderr, stdout } = await execute(command, { env: process.env })
  if (stderr) {
    throw new Error(`${command} failed with\n${stderr}`)
  }

  console.log(stdout)
  console.log("Type generation success 😁")
}

generateTypes()
