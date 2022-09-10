import { CSSProperties } from "react"
import { css, SerializedStyles } from "@emotion/react"

import { Font } from "./Font"

export namespace Mixin {
  interface FlexProps {
    direction?: CSSProperties["flexDirection"]
    alignment?: CSSProperties["alignItems"]
    justify?: CSSProperties["justifyContent"]
    wrap?: CSSProperties["flexWrap"]
  }

  export const flex = ({
    direction = "row",
    justify = "normal",
    alignment = "normal",
    wrap = "nowrap"
  }: FlexProps): Readonly<SerializedStyles> => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${alignment};
    justify-content: ${justify};
    flex-wrap: ${wrap};
  `

  interface TypographyProps {
    font?: CSSProperties["fontFamily"]
    size?: CSSProperties["fontSize"]
    weight?: CSSProperties["fontWeight"]
    height?: CSSProperties["lineHeight"]
  }

  export const typography = ({
    font = Font.pretendard,
    size = "1rem",
    weight = "normal",
    height = "normal"
  }: TypographyProps): Readonly<SerializedStyles> => css`
    font-family: ${font};
    font-size: ${size};
    font-weight: ${weight};
    line-height: ${height};
  `

  export const absoluteFill: Readonly<SerializedStyles> = css`
    position: absolute;
    inset: 0;
  `
}
