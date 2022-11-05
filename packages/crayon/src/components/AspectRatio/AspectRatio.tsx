import { FC, HTMLAttributes } from "react"

import { Root } from "./AspectRatio.styled"

interface Props extends HTMLAttributes<HTMLDivElement> {
  ratio?: number
  children?: JSX.Element
}

export const AspectRatio: FC<Props> = ({ ratio = 1, children, ...rest }) => (
  <Root {...rest} ratio={ratio}>
    {children}
  </Root>
)
