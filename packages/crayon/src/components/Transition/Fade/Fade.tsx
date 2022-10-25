import { FC } from "react"

import { TransitionProps } from "../types"
import { TweenTransition } from "../TweenTransition"

const animation = {
  begin: { opacity: 0 },
  end: { opacity: 1 }
}

interface Props extends TransitionProps {}

export const Fade: FC<Props> = ({ children, timeout, ...rest }) => (
  <TweenTransition {...rest} {...animation} transition={`opacity ${timeout}ms`} timeout={timeout}>
    {children}
  </TweenTransition>
)
