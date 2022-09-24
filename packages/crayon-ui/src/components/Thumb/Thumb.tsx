import { FC, HTMLAttributes } from "react"
import { ColorVariant } from "@emotion/react"

import { ThumbRoot } from "./Thumb.styled"

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: ColorVariant
}

export const Thumb: FC<Props> = ({ color = "primary", ...props }) => (
  <ThumbRoot {...props} color={color} />
)
