import { FC, HTMLAttributes } from "react"

import { Fade } from "../Fade"

import { BackdropRoot } from "./Backdrop.styled"

interface Props extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
}

export const Backdrop: FC<Props> = ({ open = false, ...props }) => (
  <Fade in={open} timeout={300} unmountOnExit>
    <BackdropRoot {...props} />
  </Fade>
)
