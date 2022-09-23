import styled from "@emotion/styled"
import { ColorVariant, keyframes } from "@emotion/react"

import { Mixin } from "../../theme"
import { alpha } from "../../utils"
import { CheckBoxRounded } from "../../icons"

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
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

export const AnimatedCheckBoxRounded = styled(CheckBoxRounded)`
  animation: ${bounce} 300ms ease-in-out;
`
