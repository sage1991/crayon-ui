import { luminance } from "./luminance"
import { analyze } from "./analyze"

// reference: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
export const calculateContrastRatio = (color1: string, color2: string) => {
  const luminance1 = luminance(analyze(color1).value)
  const luminance2 = luminance(analyze(color2).value)
  return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05)
}
