import { CSSProperties } from "react"

import { Font } from "./Font"

export namespace Mixin {
  interface FlexProps {
    direction?: CSSProperties["flexDirection"]
    alignment?: CSSProperties["alignItems"]
    justify?: CSSProperties["justifyContent"]
    wrap?: CSSProperties["flexWrap"]
    inline?: boolean
  }

  export const flex = ({
    direction = "row",
    justify = "normal",
    alignment = "normal",
    wrap = "nowrap",
    inline = false
  }: FlexProps = {}) => `
    display: ${inline ? "inline-flex" : "flex"};
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
  }: TypographyProps) => `
    font-family: ${font};
    font-size: ${size};
    font-weight: ${weight};
    line-height: ${height};
  `

  export const absoluteFill = `
    position: absolute;
    inset: 0;
  `

  export const pointer = `
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  `
}
