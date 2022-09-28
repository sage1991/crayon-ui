import { FC } from "react"

import { TransitionProps } from "../types"
import { TweenTransition } from "../TweenTransition"

const animation = {
  begin: {
    transform: "scale(1.1)",
    opacity: 0
  },
  end: {
    transform: "scale(1)",
    opacity: 1
  }
}

type Props = TransitionProps

export const Focus: FC<Props> = ({ timeout, children, ...rest }) => (
  <TweenTransition
    {...rest}
    {...animation}
    transition={`transform ${timeout}ms, opacity ${timeout}ms`}
    timeout={timeout}
  >
    {children}
  </TweenTransition>
)
