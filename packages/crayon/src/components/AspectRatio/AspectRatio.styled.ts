import styled from "@emotion/styled"

import { Mixin, Supports } from "../../theme"

export const Root = styled("div")`
  ${Mixin.flex({ alignment: "center", justify: "center" })}
`

interface Props {
  ratio: number
}

export const InnerContainer = styled("div")<Props>(
  ({ ratio }) => `
    ${Mixin.flex({ alignment: "center", justify: "center" })}
    width: 100%;
    height: 100%;
    aspect-ratio: ${ratio};

    > :first-of-type {
      width: 100%;
      height: 100%;
    }

    ${Supports.not(`aspect-ratio: ${ratio}`)} {
      position: relative;
      padding-top: ${100 / ratio}%;

      > :first-of-type {
        ${Mixin.absoluteFill}
      }
    }
  `
)
