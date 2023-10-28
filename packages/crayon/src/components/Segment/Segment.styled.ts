import styled from "@emotion/styled"

import { Mixin } from "../../theme"

export const Root = styled.button`
  ${Mixin.pointer}
  ${Mixin.typography({ size: "1rem", weight: "500" })}
  flex: 1;
  padding: 12px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.palette.text.main};
`
