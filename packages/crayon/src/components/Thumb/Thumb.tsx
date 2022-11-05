import styled from "@emotion/styled"
import { alpha } from "@crayon-ui/utils"

import { ColorVariant, Mixin, Shadow } from "../../theme"

interface Props {
  color?: ColorVariant
}

export const Thumb = styled("div")<Props>(
  ({ theme, color = "primary" }) => `
  ${Mixin.pointer}
  ${Mixin.flex({ inline: true, alignment: "center", justify: "center" })}
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
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
  
  &:focus-within:after {
    transform: scale(2);
  }
`
)
