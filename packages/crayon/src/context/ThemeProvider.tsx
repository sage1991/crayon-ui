import { FC, PropsWithChildren } from "react"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"

import { CrayonTheme, theme as defaultTheme } from "../theme"

interface Props extends PropsWithChildren {
  theme?: CrayonTheme
}

export const ThemeProvider: FC<Props> = ({ theme = defaultTheme, children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
)
