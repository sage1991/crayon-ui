import { Transition } from "react-transition-group"
import { cloneElement, FC } from "react"
import { TransitionProps } from "../types"

const transform = {
  up: { to: "translateY(0)", from: "translateY(100%)" },
  down: { to: "translateY(0)", from: "translateY(-100%)" },
  right: { to: "translateX(0)", from: "translateX(-100%)" },
  left: { to: "translateX(0)", from: "translateX(100%)" }
}

interface Props extends TransitionProps {
  direction?: "up" | "down" | "right" | "left"
}

export const Slide: FC<Props> = ({ children, timeout, direction = "up", ...rest }) => (
  <Transition {...rest} timeout={timeout}>
    {(status) =>
      cloneElement(children, {
        ...children.props,
        style: {
          ...children.props.style,
          transition: `transform ${timeout}ms, opacity ${timeout}ms`,
          transform:
            status === "entered" || status === "entering"
              ? transform[direction].to
              : transform[direction].from,
          opacity: status === "entered" || status === "entering" ? 1 : 0
        }
      })
    }
  </Transition>
)
