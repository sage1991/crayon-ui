import { RgbColorValue } from "./rgb"

export const normalize = ({ red, green, blue }: RgbColorValue): RgbColorValue => ({
  red: red / 255,
  green: green / 255,
  blue: blue / 255
})
