import styled from "@emotion/styled"
import { Mixin, Palette, ZIndex } from "../../theme"

export const ModalRoot = styled("div")`
  ${Mixin.absoluteFill}
  ${Mixin.flex({ alignment: "center", justify: "center" })}
  z-index: ${ZIndex.modal};
`

export const ModalContents = styled("div")`
  background-color: ${Palette.white};
  z-index: 1;
`
