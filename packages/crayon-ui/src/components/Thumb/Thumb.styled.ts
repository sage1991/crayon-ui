import styled from "@emotion/styled"
import { ColorVariant } from "@emotion/react"

import { Mixin, Shadow } from "../../theme"
import { alpha } from "../../utils"

interface Props {
  color: ColorVariant
}

export const ThumbRoot = styled("div")<Props>`
  ${Mixin.flex({ alignment: "center", justify: "center" })}
  position: relative;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:before {
    content: "";
    width: 60%;
    height: 60%;
    background-color: ${({ theme, color }) => theme.palette[color].main};
    border-radius: inherit;
    box-shadow: ${Shadow.low};
  }

  &:after {
    ${Mixin.absoluteFill}
    content: "";
    border-radius: inherit;
    transition: background-color 300ms, transform 300ms;
  }

  &:hover:after {
    background-color: ${({ theme, color }) => alpha(theme.palette[color].main)};
  }

  &:active:after {
    transform: scale(1.3);
  }
`
