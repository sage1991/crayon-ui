import styled from "@emotion/styled"
import { ColorVariant } from "@emotion/react"

import { Mixin } from "../../theme"
import { alpha } from "../../utils"

interface CheckboxRootProps {
  color: ColorVariant
  disabled: boolean
}

export const CheckboxRoot = styled("div")<CheckboxRootProps>`
  ${Mixin.flex({ alignment: "center", justify: "center" })}
  box-sizing: border-box;
  position: relative;
  width: 42px;
  height: 42px;
  padding: 10px;
  border-radius: 50%;
  color: ${({ disabled, color, theme }) => alpha(theme.palette[color].main, disabled ? 0.3 : 1)};
`

export const Input = styled("input")`
  ${Mixin.absoluteFill}
  opacity: 0;
`
