import styled from "@emotion/styled"

import { Mixin } from "../../theme"

export const CheckboxRoot = styled("div")`
  ${Mixin.flex({ alignment: "center", justify: "center" })}
  box-sizing: border-box;
  position: relative;
  width: 42px;
  height: 42px;
  padding: 9px;
  border: 1px solid black;
`

export const Input = styled("input")`
  ${Mixin.absoluteFill}
  opacity: 0;
`
