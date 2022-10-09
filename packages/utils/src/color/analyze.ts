import { RgbColorValue } from "./rgb"
import { clamp, round } from "../math"

export interface ColorInfo {
  type: "rgb" | "rgba" | "hex"
  value: RgbColorValue
  alpha?: number
}

const RGBA_REGEX =
  /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*((0(\.\d+)?)|(1(\.0+)?))\s*)?\)$/
const HEX_REGEX = /^#((\d|[a-f]|[A-F]){3,4}|((\d|[a-f]|[A-F]){2}){3,4})$/

export const analyze = (color: string): ColorInfo => {
  let info: ColorInfo | null = null
  if (RGBA_REGEX.test(color)) {
    info = analyzeRgb(color)
  }
  if (HEX_REGEX.test(color)) {
    info = analyzeHex(color)
  }

  if (!info) {
    throw Error(`Unsupported color: ${color}`)
  }
  return info
}

const analyzeRgb = (color: string): ColorInfo => {
  const isRgba = color.includes("rgba")
  const [red, green, blue, alpha] = color
    .replace(RGBA_REGEX, "$1,$2,$3,$5")
    .split(",")
    .filter(Boolean)
    .map((value, index) =>
      clamp(parseFloat(value.trim()), {
        maximum: index === 3 ? 1 : 255,
        minimum: 0
      })
    )
  return {
    type: isRgba ? "rgba" : "rgb",
    value: { red, green, blue },
    alpha
  }
}

const analyzeHex = (color: string): ColorInfo => {
  color = color.replace("#", "")
  const regex = new RegExp(`.{${color.length <= 4 ? 1 : 2}}`, "g")
  const [red, green, blue, alpha] = color.match(regex)!.map((value, index) => {
    if (value.length === 1) {
      value += value
    }
    return index === 3 ? round((parseInt(value, 16) / 255) * 1000) / 1000 : parseInt(value, 16)
  })
  return {
    type: "hex",
    value: { red, green, blue },
    alpha
  }
}
