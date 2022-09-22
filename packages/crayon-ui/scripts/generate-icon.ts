import { transform, Config } from "@svgr/core"
import fs from "fs/promises"
import path from "path"

const iconRoot = path.resolve(__dirname, "../icons")
const dist = path.resolve(__dirname, "../src/icons")
const index = path.resolve(__dirname, "../src/icons/index.ts")

const generateCodeFromSvg = async (fileName: string) => {
  const componentName = fileName.replace(".svg", "")
  const svg = await fs.readFile(`${iconRoot}/${fileName}`, { encoding: "utf-8" })
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

  const iconNames = await fs.readdir(iconRoot)
  await Promise.all(iconNames.map(generateCodeFromSvg))
  await Promise.all(
    iconNames.map((name) => fs.appendFile(index, `export * from "./${name.replace(".svg", "")}"\n`))
  )
}

main()
