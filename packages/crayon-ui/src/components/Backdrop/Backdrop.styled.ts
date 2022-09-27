import styled from "@emotion/styled"

import { Mixin, Palette } from "../../theme"
import { alpha } from "../../utils"

export const BackdropRoot = styled("div")`
  ${Mixin.absoluteFill};
  background-color: ${alpha(Palette.black, 0.2)};
`
