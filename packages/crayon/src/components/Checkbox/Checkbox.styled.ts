import styled from "@emotion/styled"
import { ColorVariant, keyframes } from "@emotion/react"
import { CheckBoxRounded } from "@crayon-ui/icons"
import { alpha } from "@crayon-ui/utils"

import { Mixin } from "../../theme"

interface CheckboxRootProps {
  color: ColorVariant
  disabled: boolean
}

export const CheckboxRoot = styled("div")<CheckboxRootProps>`
  ${Mixin.flex({ inline: true, alignment: "stretch", justify: "stretch" })}
  box-sizing: border-box;
  position: relative;
  width: 42px;
  height: 42px;
  padding: 10px;
  border-radius: 50%;
  color: ${({ disabled, color, theme }) => alpha(theme.palette[color].main, disabled ? 0.3 : 1)};
`

export const Input = styled("input")`
  ${Mixin.pointer}
  ${Mixin.absoluteFill}
  margin: 0;
  padding: 0;
  opacity: 0;
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
