import { clamp } from "../math"
import { analyze } from "./analyze"
import { hsl } from "./hsl"
import { rgb } from "./rgb"
import { toString } from "./toString"

export const darken = (source: string, coefficient: number = 0.15) => {
  const { type, value, alpha } = analyze(source)
  const hslColor = hsl(value)
  hslColor.lightness = clamp(hslColor.lightness * (1 - coefficient), {
    maximum: 1,
    minimum: 0
  })
  return toString({
    type,
    alpha,
    value: rgb(hslColor)
  })
}
