import { FC } from "react"

import { TweenTransition } from "../TweenTransition"
import { TransitionProps } from "../types"
import { useMeasure } from "../../../hooks"
import { css } from "@emotion/react"

interface Props extends TransitionProps {}

export const Collapse: FC<Props> = ({ minHeight, timeout, children, ...rest }) => {
  const { ref, rect } = useMeasure<HTMLDivElement>()
  return (
    <TweenTransition
      {...rest}
      unmountOnExit={false}
      begin={{ height: 0 }}
      end={{ height: rect.current.height }}
      transition={`height ${timeout}ms`}
      timeout={timeout}
    >
      <div
        css={css`
          overflow: hidden;
        `}
      >
        <div ref={ref}>{children}</div>
      </div>
    </TweenTransition>
  )
}
