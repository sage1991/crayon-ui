import { FC } from "react"

import { TweenTransition } from "../TweenTransition"
import { TransitionProps } from "../types"

const animation = {
  up: {
    end: { transform: "translateY(0)", opacity: 1 },
    begin: { transform: "translateY(100%)", opacity: 0 }
  },
  down: {
    end: { transform: "translateY(0)", opacity: 1 },
    begin: { transform: "translateY(-100%)", opacity: 0 }
  },
  right: {
    end: { transform: "translateX(0)", opacity: 1 },
    begin: { transform: "translateX(-100%)", opacity: 0 }
  },
  left: {
    end: { transform: "translateX(0)", opacity: 1 },
    begin: { transform: "translateX(100%)", opacity: 0 }
  }
}

interface Props extends TransitionProps {
  direction?: "up" | "down" | "right" | "left"
}

export const Slide: FC<Props> = ({ children, timeout, direction = "up", ...rest }) => (
  <TweenTransition
    {...rest}
    {...animation[direction]}
    transition={`transform ${timeout}ms, opacity ${timeout}ms`}
    timeout={timeout}
  >
    {children}
  </TweenTransition>
)
