import { FC } from "react"

import { TweenTransition } from "../TweenTransition"
import { TransitionProps } from "../types"

interface Props extends TransitionProps {
  degree: number
  direction?: "X" | "Y" | "Z"
}

export const Rotate: FC<Props> = ({ degree, direction = "Z", timeout, children, ...rest }) => (
  <TweenTransition
    {...rest}
    transition={`transform ${timeout}ms`}
    begin={{ transform: "rotate(0)" }}
    end={{ transform: `rotate${direction}(${degree}deg)` }}
    timeout={timeout}
  >
    {children}
  </TweenTransition>
)
