import { cloneElement, FC } from "react"
import { Transition } from "react-transition-group"

import { TransitionProps } from "../types"

type Props = TransitionProps

export const Fade: FC<Props> = ({ children, timeout, ...rest }) => (
  <Transition {...rest} timeout={timeout}>
    {(status) =>
      cloneElement(children, {
        ...children.props,
        style: {
          ...children.props.style,
          transition: `opacity ${timeout}ms`,
          opacity: status === "entered" || status === "entering" ? 1 : 0
        }
      })
    }
  </Transition>
)
