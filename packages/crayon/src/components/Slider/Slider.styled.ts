import styled from "@emotion/styled"
import { animated } from "@react-spring/web"

import { ColorVariant, Mixin, Palette, Radius } from "../../theme"

interface StepProps {
  position: number
}

export const Point = styled("span")<StepProps>`
  position: absolute;
  left: ${({ position }) => position}%;
  height: 90%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${Palette.white};
  z-index: 1;

  &:first-of-type {
    display: none;
  }

  &:last-of-type {
    display: none;
  }
`

export const Rail = styled("div")`
  ${Mixin.flex({ alignment: "center", justify: "space-evenly" })}
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: inherit;
`

export const Track = styled(animated.div)`
  position: absolute;
  left: 0;
  height: 100%;
  border-radius: inherit;
`

interface SliderRootProps {
  color: ColorVariant
}

export const SliderRoot = styled("div")<SliderRootProps>(
  ({ theme, color }) => `
  ${Mixin.pointer}
  ${Mixin.flex({ inline: true, alignment: "center", justify: "center" })}
  position: relative;
  width: 100%;
  height: 20px;
  padding: 10px;
  border-radius: ${Radius.md}px;
  box-sizing: border-box;
  touch-action: none;

  ${Rail} {
    background-color: ${theme.palette[color].light};
  }

  ${Track} {
    background-color: ${theme.palette[color].main};
  }
`
)

export const ThumbContainer = styled(animated.div)`
  position: absolute;
  left: -10px;
  top: calc(-10px + 50%);
  touch-action: none;
  z-index: 2;
`

export const Input = styled("input")`
  ${Mixin.absoluteFill}
  opacity: 0;
`
