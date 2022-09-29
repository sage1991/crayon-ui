import { FC, ReactNode } from "react"

import { ShowcaseRoot, Title } from "./Showcase.styled"

interface Props {
  title?: string
  children?: ReactNode
}

export const Showcase: FC<Props> = ({ title, children }) => {
  return (
    <ShowcaseRoot>
      {title && <Title>{title}</Title>}
      {children}
    </ShowcaseRoot>
  )
}
