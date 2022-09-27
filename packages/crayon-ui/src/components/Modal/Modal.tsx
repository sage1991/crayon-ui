import { FC, HTMLAttributes, MouseEventHandler, ReactNode } from "react"
import { createPortal } from "react-dom"
import { Transition } from "react-transition-group"
import { css } from "@emotion/react"

import { Backdrop } from "../Backdrop"
import { isServerSide } from "../../utils"
import { Fade } from "../Fade"

import { ModalContents, ModalRoot } from "./Modal.styled"

interface Props extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onBackdropClick?: MouseEventHandler<HTMLDivElement>
  children?: ReactNode
}

export const Modal: FC<Props> = ({ open = false, onBackdropClick, children, ...props }) => {
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
            <Fade in={status === "entering" || status === "entered"} timeout={300} unmountOnExit>
              <ModalContents {...props}>{children}</ModalContents>
            </Fade>
          </ModalRoot>,
          document.body
        )
      }
    </Transition>
  )
}
