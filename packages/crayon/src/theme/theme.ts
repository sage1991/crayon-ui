import { Theme } from "@emotion/react"

import { Palette } from "./Palette"
import { Font } from "./Font"
import { ZIndex } from "./ZIndex"

export const theme: Theme = {
  palette: {
    primary: {
      light: Palette.pink["300"],
      main: Palette.pink["500"],
      dark: Palette.pink["700"],
      contrast: Palette.white
    },
    secondary: {
      light: Palette.blue["300"],
      main: Palette.blue["500"],
      dark: Palette.blue["700"],
      contrast: Palette.white
    },
    warning: {
      light: Palette.orange["300"],
      main: Palette.orange["500"],
      dark: Palette.orange["700"],
      contrast: Palette.white
    },
    error: {
      light: Palette.red["300"],
      main: Palette.red["500"],
      dark: Palette.red["700"],
      contrast: Palette.white
    },
    success: {
      light: Palette.green["300"],
      main: Palette.green["500"],
      dark: Palette.green["700"],
      contrast: Palette.white
    },
    text: {
      light: Palette.gray["700"],
      main: Palette.gray["900"],
      dark: Palette.black,
      contrast: Palette.white
    },
    disabled: {
      light: Palette.gray["200"],
      main: Palette.gray["500"],
      dark: Palette.gray["700"],
      contrast: Palette.white
    }
  },
  typography: {
    font: Font.pretendard,
    size: "16px"
  },
  zIndex: {
    fab: ZIndex.fab,
    drawer: ZIndex.drawer,
    modal: ZIndex.modal,
    snackbar: ZIndex.snackbar,
    tooltip: ZIndex.tooltip
  }
}
