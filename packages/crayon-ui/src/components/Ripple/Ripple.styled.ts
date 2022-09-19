import styled from "@emotion/styled"
import { ColorVariant, css, keyframes } from "@emotion/react"

import { alpha } from "../../utils"
import { Mixin } from "../../theme"

export const RippleRoot = styled("span")`
  ${Mixin.absoluteFill}
  overflow: hidden;
  z-index: 0;
`

interface RippleEffectProps {
  color: ColorVariant
  radius: number
  cx: number
  cy: number
  mount?: boolean
}

export const RippleEffect = styled("span")<RippleEffectProps>(
  ({ theme, color, radius, cx, cy, mount = true }) => css`
    ${Mixin.absoluteFill}
    left: ${cx - radius}px;
    top: ${cy - radius}px;
    background-color: ${alpha(theme.palette[color].light, 0.5)};
    border-radius: ${radius}px;
    width: ${radius * 2}px;
    height: ${radius * 2}px;
    animation: ${scaleOut} 350ms ease-in-out, ${mount ? fadeIn : fadeOut} 350ms ease-in-out;
    animation-fill-mode: forwards;
  `
)

const scaleOut = keyframes`
  0% {
    opacity: 0.7;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0.7;
  }

  100% {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`
