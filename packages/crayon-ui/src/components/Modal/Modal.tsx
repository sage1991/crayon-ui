import { ComponentType, FC, HTMLAttributes, MouseEventHandler, ReactNode } from "react"
import { createPortal } from "react-dom"
import { css } from "@emotion/react"
import { Transition } from "react-transition-group"

import { Backdrop } from "../Backdrop"
import { Fade, TransitionProps } from "../Transition"
import { isServerSide } from "../../utils"

import { ModalContents, ModalRoot } from "./Modal.styled"

interface Props extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onBackdropClick?: MouseEventHandler<HTMLDivElement>
  children?: ReactNode
  TransitionEffect?: ComponentType<TransitionProps>
}

export const Modal: FC<Props> = ({
  open = false,
  onBackdropClick,
  TransitionEffect = Fade,
  children,
  ...props
}) => {
  if (isServerSide()) {
    return null
  }

  return (
    <Transition in={open} timeout={300} unmountOnExit>
      {(status) =>
        createPortal(
          <ModalRoot>
            <Backdrop
              css={css`
                z-index: -1;
              `}
              open={status === "entering" || status === "entered"}
              onClick={onBackdropClick}
            />
            <TransitionEffect
              in={status === "entering" || status === "entered"}
              timeout={300}
              unmountOnExit
            >
              <ModalContents {...props}>{children}</ModalContents>
            </TransitionEffect>
          </ModalRoot>,
          document.body
        )
      }
    </Transition>
  )
}
