import { FC, HTMLAttributes } from "react"

import { Root } from "./Segment.styled"

interface Props extends HTMLAttributes<HTMLButtonElement> {
  value: string
}

export const Segment: FC<Props> = (props) => <Root {...props} />
