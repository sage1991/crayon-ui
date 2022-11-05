export type ColorVariant =
  | "primary"
  | "secondary"
  | "warning"
  | "error"
  | "success"
  | "text"
  | "disabled"

export interface ColorTheme {
  dark: string
  main: string
  light: string
  contrast: string
}

export type PaletteTheme = {
  [K in ColorVariant]: ColorTheme
}
