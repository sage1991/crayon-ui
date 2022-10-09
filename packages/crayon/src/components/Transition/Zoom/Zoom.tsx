import { FC } from "react"

import { TweenTransition } from "../TweenTransition"
import { TransitionProps } from "../types"

const animation = {
  begin: {
    transform: "scale(0)",
    opacity: 0
  },
  end: {
    transform: "scale(1)",
    opacity: 1
  }
}

interface Props extends TransitionProps {}

export const Zoom: FC<Props> = ({ timeout, children, ...rest }) => {
  return (
    <TweenTransition
      {...rest}
      {...animation}
      transition={`transform ${timeout}ms, opacity ${timeout}ms`}
      timeout={timeout}
    >
      {children}
    </TweenTransition>
  )
}
