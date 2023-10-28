import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"

import { ColorVariant, Mixin } from "../../theme"

export const RippleRoot = styled("span")`
  ${Mixin.absoluteFill}
  overflow: hidden;
  z-index: 0;
  border-radius: inherit;
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
    position: absolute;
    left: ${cx - radius}px;
    top: ${cy - radius}px;
    background-color: ${theme.palette[color].light};
    border-radius: ${radius}px;
    width: ${radius * 2}px;
    height: ${radius * 2}px;
    animation: ${scaleOut} 500ms ease-in-out, ${mount ? fadeIn : fadeOut} 500ms ease-in-out;
    animation-fill-mode: forwards;
  `
)

const scaleOut = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.4;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 0.4;
  }

  100% {
    opacity: 0;
  }
`
