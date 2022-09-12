import { Theme } from "@emotion/react"

import { Palette } from "./Palette"
import { Font } from "./Font"
import { ZIndex } from "./ZIndex"

export const theme: Theme = {
  palette: {
    primary: {
      main: Palette.pink["500"],
      contrast: Palette.white
    },
    secondary: {
      main: Palette.blue["500"],
      contrast: Palette.white
    },
    warning: {
      main: Palette.orange["500"],
      contrast: Palette.white
    },
    error: {
      main: Palette.red["500"],
      contrast: Palette.white
    },
    success: {
      main: Palette.green["500"],
      contrast: Palette.white
    },
    text: {
      main: Palette.gray["900"],
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
