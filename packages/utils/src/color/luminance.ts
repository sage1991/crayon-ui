import { round } from "../math"
import { normalize } from "./normalize"
import { RgbColorValue } from "./rgb"

// reference: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
export const luminance = (value: RgbColorValue) => {
  const { red, green, blue } = normalize(value)
  const r = red <= 0.03928 ? red / 12.92 : ((red + 0.055) / 1.055) ** 2.4
  const g = green <= 0.03928 ? green / 12.92 : ((green + 0.055) / 1.055) ** 2.4
  const b = blue <= 0.03928 ? blue / 12.92 : ((blue + 0.055) / 1.055) ** 2.4
  return round(0.2126 * r + 0.7152 * g + 0.0722 * b, 5)
}
