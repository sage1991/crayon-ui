import { analyze } from "./analyze"
import { darken } from "./darken"
import { lighten } from "./lighten"
import { luminance } from "./luminance"

export const emphasize = (color: string, coefficient: number = 0.15) => {
  const { value } = analyze(color)
  return luminance(value) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient)
}
