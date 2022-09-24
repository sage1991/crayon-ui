import { FC, HTMLAttributes } from "react"
import { Transition } from "react-transition-group"

import { BackdropRoot, entering, exiting } from "./Backdrop.styled"

interface Props extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
}

export const Backdrop: FC<Props> = ({ open = false, ...props }) => (
  <Transition in={open} timeout={300} unmountOnExit>
    {(state) => <BackdropRoot css={state.includes("enter") ? entering : exiting} {...props} />}
  </Transition>
)
