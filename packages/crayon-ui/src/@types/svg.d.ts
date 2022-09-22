declare module "*.svg" {
  import { FC, SVGAttributes } from "react"

  const SvgComponent: FC<SVGAttributes<SVGElement>>
  export default SvgComponent
}
