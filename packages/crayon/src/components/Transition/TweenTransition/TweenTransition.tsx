import { cloneElement, CSSProperties, FC } from "react"
import { Transition } from "react-transition-group"

import { TransitionProps } from "../types"

interface Props extends TransitionProps {
  transition: CSSProperties["transition"]
  begin: CSSProperties
  end: CSSProperties
}

export const TweenTransition: FC<Props> = ({ transition, begin, end, children, ...props }) => (
  <Transition {...props}>
    {(status) => {
      const style = status === "entered" || status === "entering" ? end : begin
      return cloneElement(children, {
        ...children.props,
        style: {
          ...children.props.style,
          ...style,
          transition
        }
      })
    }}
  </Transition>
)
