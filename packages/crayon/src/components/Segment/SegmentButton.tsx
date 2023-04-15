import { FC, HTMLAttributes } from "react"

import { Root } from "./SegmentButton.styled"

interface Props extends HTMLAttributes<HTMLButtonElement> {
  value: string
}

export const SegmentButton: FC<Props> = (props) => <Root {...props} />
