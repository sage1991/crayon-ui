import styled from "@emotion/styled"
import { ColorVariant, css, keyframes } from "@emotion/react"

import { alpha } from "../../utils"
import { Mixin } from "../../theme"

export const RippleRoot = styled("span")`
  ${Mixin.absoluteFill}
  overflow: hidden;
`

interface RippleEffectProps {
  color: ColorVariant
  radius: number
  cx: number
  cy: number
}

export const RippleEffect = styled("span")<RippleEffectProps>(
  ({ theme, color, radius, cx, cy }) => css`
    ${Mixin.absoluteFill}
    left: ${cx - radius}px;
    top: ${cy - radius}px;
    background-color: ${alpha(theme.palette[color].light, 0.5)};
    border-radius: ${radius}px;
    width: ${radius * 2}px;
    height: ${radius * 2}px;
    animation: ${ripple} 400ms ease-out;
    animation-fill-mode: forwards;
  `
)

const ripple = keyframes`
  0% {
    opacity: 1;
    transform: scale(0);
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
`
