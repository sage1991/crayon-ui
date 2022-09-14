import { CSSProperties } from "react"

declare module "@emotion/react" {
  type ColorVariant = "primary" | "secondary" | "warning" | "error" | "success" | "text"

  interface ColorTheme {
    dark: string
    main: string
    light: string
    contrast: string
  }

  type PaletteTheme = {
    [K in ColorVariant]: ColorTheme
  }

  interface TypographyTheme {
    font: CSSProperties["fontFamily"]
    size: CSSProperties["fontSize"]
  }

  interface Theme {
    palette: PaletteTheme
    typography: TypographyTheme
    zIndex: {
      fab: number
      drawer: number
      modal: number
      snackbar: number
      tooltip: number
    }
  }
}
