import { transform, Config } from "@svgr/core"
import fs from "fs/promises"
import path from "path"

const resources = path.resolve(__dirname, "../src/resources")
const dist = path.resolve(__dirname, "../src/generated")
const index = `${dist}/index.ts`

const generateCodeFromSvg = async (fileName: string) => {
  const componentName = fileName.replace(".svg", "")
  const svg = await fs.readFile(`${resources}/${fileName}`, { encoding: "utf-8" })
  const code = await transform(
    svg,
    { typescript: true, template, jsxRuntime: "classic" },
    { componentName }
  )
  await fs.writeFile(`${dist}/${componentName}.tsx`, code)
}

const template: Config["template"] = ({ componentName, props, jsx }, { tpl }) =>
  tpl`
    import { SVGProps } from "react"
    
    export function ${componentName}(${props}) {
      return ${jsx}
    }
  `

const main = async () => {
  try {
    await fs.rm(dist, { recursive: true, force: true })
  } catch (e: any) {
    if (e.code !== "ENOENT") {
      throw e
    }
  }
  await fs.mkdir(dist)

  const iconNames = await fs.readdir(resources)
  await Promise.all(iconNames.map(generateCodeFromSvg))
  const buffer = iconNames
    .sort()
    .reduce((acc, name) => `${acc}export * from "./${name.replace(".svg", "")}"\n`, "")
  await fs.appendFile(index, buffer)
}

main()
