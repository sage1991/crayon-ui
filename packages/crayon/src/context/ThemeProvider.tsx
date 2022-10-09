import { FC, memo, PropsWithChildren } from "react"
import { css, Global, ThemeProvider as EmotionThemeProvider, useTheme } from "@emotion/react"

import { theme } from "../theme"

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <DefaultStyle />
    {children}
  </EmotionThemeProvider>
)

const DefaultStyle: FC = memo(() => {
  const { typography, palette } = useTheme()
  return (
    <Global
      styles={css`
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");

        html,
        body {
          font-family: ${typography.font};
          font-size: ${typography.size};
          color: ${palette.text.main};
        }
      `}
    />
  )
})
