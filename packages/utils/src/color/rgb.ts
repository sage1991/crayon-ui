import { round } from "../math"
import { HSLColorValue } from "./hsl"

export interface RgbColorValue {
  red: number
  green: number
  blue: number
}

// https://en.wikipedia.org/wiki/HSL_and_HSV
export const rgb = (value: HSLColorValue): RgbColorValue => {
  const f = createColorSpaceMapper(value)
  return {
    red: round(255 * f(0)),
    green: round(255 * f(8)),
    blue: round(255 * f(4))
  }
}

const createColorSpaceMapper =
  ({ hue, lightness, saturation }: HSLColorValue) =>
  (n: number): number => {
    const k = (n + hue / 30) % 12
    const a = saturation * Math.min(lightness, 1 - lightness)
    return lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
  }
