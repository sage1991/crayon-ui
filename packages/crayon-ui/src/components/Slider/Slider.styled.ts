import styled from "@emotion/styled"
import { ColorVariant } from "@emotion/react"
import { animated } from "@react-spring/web"

import { Mixin, Radius } from "../../theme"

interface Props {
  color: ColorVariant
}

export const SliderRoot = styled("div")<Props>`
  ${Mixin.flex({ inline: true, alignment: "center", justify: "center" })}
  position: relative;
  width: 100%;
  height: 20px;
  padding: 10px;
  border-radius: ${Radius.md}px;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
`

export const Rail = styled("div")<Props>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: ${({ theme, color }) => theme.palette[color].light};
  border-radius: inherit;
`

export const Track = styled(animated.div)<Props>`
  height: 100%;
  background-color: ${({ theme, color }) => theme.palette[color as ColorVariant].main};
  border-radius: inherit;
`

export const ThumbContainer = styled(animated.div)`
  position: absolute;
  left: -10px;
  top: calc(-10px + 50%);
  touch-action: none;
`

export const Input = styled("input")`
  ${Mixin.absoluteFill}
  opacity: 0;
`
