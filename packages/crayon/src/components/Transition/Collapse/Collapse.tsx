import { FC } from "react"
import { css } from "@emotion/react"
import { Transition } from "react-transition-group"

import { TransitionProps } from "../types"
import { useMeasure } from "../../../hooks"

interface Props extends TransitionProps {}

export const Collapse: FC<Props> = ({ timeout, children, unmountOnExit, in: isIn, ...rest }) => {
  const { measure, rect } = useMeasure<HTMLDivElement>()
  return (
    <Transition in={isIn} unmountOnExit={unmountOnExit} timeout={{ enter: 0, exit: timeout }}>
      {(status) => {
        const _isIn = status === "entered" && rect.current.height > 0
        return (
          <Transition {...rest} in={_isIn} timeout={{ enter: timeout, exit: 0 }}>
            {(_status) => {
              let height: number | string = "0px"
              if (_status === "entering" || _status === "exiting") {
                height = `${rect.current.height}px`
              }
              if (_status === "entered") {
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
                  <div {...measure()}>{children}</div>
                </div>
              )
            }}
          </Transition>
        )
      }}
    </Transition>
  )
}
