import styled from "@emotion/styled"

import { Mixin, Palette } from "../../theme"
import { alpha } from "../../utils"

interface Props {
  transparent: boolean
}

export const BackdropRoot = styled("div")<Props>`
  ${Mixin.absoluteFill};
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : alpha(Palette.black, 0.2)};
`
