import styled from "@emotion/styled"
import { alpha } from "@crayon-ui/utils"

import { Mixin, Palette } from "../../theme"

interface Props {
  transparent: boolean
}

export const BackdropRoot = styled("div")<Props>`
  ${Mixin.absoluteFill};
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : alpha(Palette.black, 0.2)};
`
