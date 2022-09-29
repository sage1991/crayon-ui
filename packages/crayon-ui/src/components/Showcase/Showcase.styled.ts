import styled from "@emotion/styled"

import { Mixin, Palette, Radius } from "../../theme"

export const ShowcaseRoot = styled("div")`
  ${Mixin.flex({ alignment: "center", justify: "center" })}
  gap: 30px;
  position: relative;
  padding: 30px 24px;
  border: 1px solid ${Palette.gray["400"]};
  border-radius: ${Radius.md}px;
  margin: 30px 0;
`

export const Title = styled("h1")`
  position: absolute;
  left: 24px;
  top: 0;
  transform: translateY(-50%);
  margin: 0;
  padding: 10px;
  background-color: ${Palette.white};
  font-size: 1.5rem;
  font-weight: 700;
`
