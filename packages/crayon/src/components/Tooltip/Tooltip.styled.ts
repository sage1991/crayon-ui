import styled from "@emotion/styled"

import { ColorVariant, Radius, Shadow, theme } from "../../theme"

export const Arrow = styled("div")`
  width: 10px;
  height: 10px;
  background-color: inherit;
  visibility: hidden;

  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
    background-color: inherit;
    visibility: visible;
    border-radius: inherit;
  }
`

interface Props {
  color: ColorVariant
}

export const Root = styled("div")<Props>`
  z-index: ${theme.zIndex.tooltip};
  background-color: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrast};
  padding: 5px 8px;
  border-radius: ${Radius.xs}px;
  box-shadow: ${Shadow.low};

  &[data-popper-placement="top"] ${Arrow} {
    bottom: -5px;
    border-radius: 0 0 ${Radius.xs / 2}px 0;
  }

  &[data-popper-placement="bottom"] ${Arrow} {
    top: -5px;
    border-radius: ${Radius.xs / 2}px 0 0 0;
  }

  &[data-popper-placement="left"] ${Arrow} {
    right: -5px;
    border-radius: 0 ${Radius.xs / 2}px 0 0;
  }

  &[data-popper-placement="right"] ${Arrow} {
    left: -5px;
    border-radius: 0 0 0 ${Radius.xs / 2}px;
  }
`
