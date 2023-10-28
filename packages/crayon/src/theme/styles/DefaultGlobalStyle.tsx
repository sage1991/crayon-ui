import { css, Global, useTheme } from "@emotion/react"
import { FC, memo } from "react"

export const DefaultGlobalStyle: FC = memo(() => {
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
