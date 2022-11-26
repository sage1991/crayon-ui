import styled from "@emotion/styled"

import { ColorVariant, Mixin } from "../../theme"

interface CheckboxRootProps {
  color: ColorVariant
}

export const CheckboxRoot = styled("div")<CheckboxRootProps>`
  ${Mixin.flex({ inline: true, alignment: "center", justify: "center" })}
  box-sizing: border-box;
  position: relative;
  width: 42px;
  height: 42px;
  padding: 10px;
  border-radius: 50%;
  color: ${({ color, theme }) => theme.palette[color].main};

  > :first-of-type {
    min-width: 100%;
    min-height: 100%;
  }
`

export const Input = styled("input")`
  ${Mixin.pointer}
  ${Mixin.absoluteFill}
  margin: 0;
  padding: 0;
  opacity: 0;
`
