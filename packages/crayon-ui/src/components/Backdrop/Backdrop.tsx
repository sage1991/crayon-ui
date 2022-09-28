import { FC, HTMLAttributes } from "react"

import { Fade } from "../Fade"

import { BackdropRoot } from "./Backdrop.styled"

interface Props extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  transparent?: boolean
}

export const Backdrop: FC<Props> = ({ open = false, transparent = false, ...props }) => (
  <Fade in={open} timeout={300} unmountOnExit>
    <BackdropRoot {...props} transparent={transparent} />
  </Fade>
)
