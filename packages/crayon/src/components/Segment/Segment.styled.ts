import styled from "@emotion/styled"

import { Palette, Radius } from "../../theme"

interface RootProps {
  length: number
  index: number
}

export const Root = styled.div<RootProps>`
  position: relative;
  background-color: ${Palette.gray["200"]};
  border: 2px solid ${Palette.gray["200"]};
  border-radius: ${Radius.sm}px;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${Palette.white};
    width: ${({ length }) => 100 / length}%;
    height: 100%;
    border-radius: inherit;
    transition: 300ms transform;
    transform: translateX(${({ index }) => index * 100}%);
  }
`

interface ContainerProps {
  length: number
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-content: center;
  background-color: transparent;
  z-index: 1;

  > button {
    max-width: ${({ length }) => 100 / length}%;
    overflow: hidden;
  }
`
