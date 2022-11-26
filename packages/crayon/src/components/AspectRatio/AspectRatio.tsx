import { FC, HTMLAttributes } from "react"

import { InnerContainer, Root } from "./AspectRatio.styled"

interface Props extends HTMLAttributes<HTMLDivElement> {
  ratio?: number
  children?: JSX.Element
}

export const AspectRatio: FC<Props> = ({ ratio = 1, children, ...rest }) => (
  <Root {...rest}>
    <InnerContainer ratio={ratio}>{children}</InnerContainer>
  </Root>
)
