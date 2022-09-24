import { ColorVariant } from "@emotion/react"
import styled from "@emotion/styled"

import { Mixin, Shadow } from "../../theme"
import { alpha } from "../../utils"

interface Props {
  color?: ColorVariant
}

export const Thumb = styled("div")<Props>(
  ({ theme, color = "primary" }) => `
  ${Mixin.flex({ alignment: "center", justify: "center" })}
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  overflow: visible;
  background-color: ${theme.palette[color].main};
  box-shadow: ${Shadow.low};

  &:after {
    ${Mixin.absoluteFill}
    content: "";
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: background-color 300ms, transform 300ms;
  }

  &:hover:after {
    background-color: ${alpha(theme.palette[color].main)};
    transform: scale(1.5);
  }

  &:active:after {
    transform: scale(2);
  }
`
)
