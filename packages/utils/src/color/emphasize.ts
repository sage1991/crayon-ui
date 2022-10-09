import { luminance } from "./luminance"
import { analyze } from "./analyze"
import { darken } from "./darken"
import { lighten } from "./lighten"

export const emphasize = (color: string, coefficient: number = 0.15) => {
  const { value } = analyze(color)
  return luminance(value) > 0.5 ? darken(color) : lighten(color)
}
