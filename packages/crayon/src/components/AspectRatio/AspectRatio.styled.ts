import styled from "@emotion/styled"

import { Mixin } from "../../theme"

interface Props {
  ratio: number
}

export const Root = styled("div")<Props>(
  ({ ratio }) => `
    ${Mixin.flex({ alignment: "center", justify: "center" })}
    aspect-ratio: ${ratio};
    
    > :first-of-type {
      width: 100%;
      height: 100%;
    }
    
    @supports not (aspect-ratio: ${ratio}) {
      position: relative;
      padding-top: ${100 / ratio}%;
      
      > :first-of-type {
        ${Mixin.absoluteFill}
      }
    }
  `
)
