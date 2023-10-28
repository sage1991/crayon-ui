import { round } from "../math"
import { normalize } from "./normalize"
import { RgbColorValue } from "./rgb"

export interface HSLColorValue {
  hue: number // 색조 (0 ~ 360 degree)
  lightness: number // 명도 (0 ~ 1)
  saturation: number // 채도 (0 ~ 1)
}

// reference: https://en.wikipedia.org/wiki/HSL_and_HSV
export const hsl = (value: RgbColorValue): HSLColorValue => {
  const { red, green, blue } = normalize(value)
  const minC = Math.min(red, green, blue)
  const maxC = Math.max(red, green, blue)
  const chroma = maxC - minC

  const hue = calculateHue(red, green, blue, maxC, chroma)
  const lightness = calculateLightness(minC, maxC)
  const saturation = calculateSaturation(chroma, lightness)

  return {
    hue,
    lightness,
    saturation
  }
}

const calculateHue = (
  red: number,
  green: number,
  blue: number,
  max: number,
  chroma: number
): number => {
  if (chroma === 0) {
    return 0
  }

  switch (max) {
    case red:
      return 60 * (round((green - blue) / chroma, 5) % 6)
    case green:
      return 60 * (round((blue - red) / chroma, 5) + 2)
    case blue:
    default:
      return 60 * (round((red - green) / chroma, 5) + 4)
  }
}

const calculateSaturation = (chroma: number, lightness: number): number => {
  switch (lightness) {
    case 0:
    case 1:
      return 0
    default:
      return chroma / (1 - Math.abs(2 * lightness - 1))
  }
}

const calculateLightness = (min: number, max: number): number => (min + max) / 2
