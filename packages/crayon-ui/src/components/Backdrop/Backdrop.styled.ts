import styled from "@emotion/styled"
import { css } from "@emotion/react"

import { Mixin, Palette } from "../../theme"
import { alpha } from "../../utils"

export const BackdropRoot = styled("div")`
  ${Mixin.absoluteFill};
  transition: background-color 300ms;
`

export const entering = css`
  background-color: ${alpha(Palette.black, 0.2)};
`

export const exiting = css`
  background-color: ${alpha(Palette.black, 0)};
`
