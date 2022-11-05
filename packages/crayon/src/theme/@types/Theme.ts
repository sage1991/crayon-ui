import { PaletteTheme } from "./Palette"
import { TypographyTheme } from "./Typography"
import { ZIndexTheme } from "./ZIndex"

export interface CrayonTheme {
  palette: PaletteTheme
  typography: TypographyTheme
  zIndex: ZIndexTheme
}
