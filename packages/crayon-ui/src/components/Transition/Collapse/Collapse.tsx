import { FC } from "react"
import { css } from "@emotion/react"
import { Transition } from "react-transition-group"

import { TransitionProps } from "../types"
import { useMeasure } from "../../../hooks"

interface Props extends TransitionProps {}

export const Collapse: FC<Props> = ({ timeout, children, unmountOnExit, ...rest }) => {
  const { ref, rect } = useMeasure<HTMLDivElement>()
  return (
    <Transition {...rest} unmountOnExit={false} timeout={{ enter: timeout, exit: 0 }}>
      {(status) => {
        let height: number | string = "0px"
        if (status === "entering" || status === "exiting") {
          height = `${rect.current.height}px`
        }
        if (status === "entered") {
          height = "auto"
        }
        return (
          <div
            css={css`
              overflow: hidden;
              transition: height ${timeout}ms;
              height: ${height};
            `}
          >
            <div ref={ref}>{children}</div>
          </div>
        )
      }}
    </Transition>
  )
}
