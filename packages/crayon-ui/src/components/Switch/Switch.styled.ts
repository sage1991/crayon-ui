import styled from "@emotion/styled"
import { ColorVariant } from "@emotion/react"

import { Mixin, Radius } from "../../theme"

interface Props {
  color: ColorVariant
  checked: boolean
}

export const SwitchRoot = styled("div")<Props>`
  ${Mixin.flex({ alignment: "center" })}
  position: relative;
  width: 40px;
  padding: 2px;
  border-radius: ${Radius.lg}px;
  background-color: ${({ theme, color, checked }) =>
    checked ? theme.palette[color].main : theme.palette[color].light};
  transition: background-color 300ms;
`

export const Input = styled("input")`
  ${Mixin.absoluteFill}
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`
