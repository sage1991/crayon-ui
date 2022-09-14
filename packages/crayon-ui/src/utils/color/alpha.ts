import { analyze } from "./analyze"
import { toString } from "./toString"
import { clamp } from "../math"

export const alpha = (color: string, opaque: number = 0.15) => {
  const { type, value } = analyze(color)
  return toString({
    type,
    value,
    alpha: clamp(opaque, {
      maximum: 1,
      minimum: 0
    })
  })
}
