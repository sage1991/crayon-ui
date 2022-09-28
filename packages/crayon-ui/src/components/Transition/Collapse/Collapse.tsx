import { FC } from "react"
import { css } from "@emotion/react"

import { TweenTransition } from "../TweenTransition"
import { TransitionProps } from "../types"

const animation = {
  begin: { height: 0 },
  end: { height: 100 }
}

interface Props extends TransitionProps {}

export const Collapse: FC<Props> = ({ minHeight, timeout, children, ...rest }) => (
  <TweenTransition {...rest} {...animation} transition={`height ${timeout}ms`} timeout={timeout}>
    <div
      css={css`
        display: inline-block;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        {children}
      </div>
    </div>
  </TweenTransition>
)
