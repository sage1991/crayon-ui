import { ColorInfo } from "./analyze"
import { clamp, round } from "../math"

export const toString = ({ type, value: { red, green, blue }, alpha }: ColorInfo): string => {
  if (type === "hex") {
    const r = red.toString(16).padStart(2, "0")
    const g = green.toString(16).padStart(2, "0")
    const b = blue.toString(16).padStart(2, "0")
    const a = alpha
      ? clamp(round(alpha * 255), { maximum: 255, minimum: 0 })
          .toString(16)
          .padStart(2, "0")
      : ""
    return `#${r}${g}${b}${a}`
  }

  if (typeof alpha === "number" && alpha < 1) {
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
  }

  return `rgb(${red}, ${green}, ${blue})`
}
