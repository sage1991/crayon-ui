import fs from "fs/promises"
import path from "path"

const iconPath = path.resolve(__dirname, "../src/icons")
const index = path.resolve(__dirname, "../src/icons/index.ts")

const main = async () => {
  await fs.rm(index)
  const fileNames = await fs.readdir(iconPath)
  await Promise.all(
    fileNames.map((name) => fs.appendFile(index, makeExportStatementByFileName(name)))
  )
}

const makeExportStatementByFileName = (
  fileName: string,
  componentName: string = fileName.replace(".svg", "")
) => `export { default as ${componentName} } from "./${fileName}"\n`

main()
