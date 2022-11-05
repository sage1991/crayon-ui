import { FC, memo, ReactNode } from "react"

import { useRipple } from "./useRipple"
import { ColorVariant } from "../../theme"

import { RippleRoot } from "./Ripple.styled"

interface Props {
  color?: ColorVariant
  center?: boolean
  disabled?: boolean
  children?: ReactNode
}

export const Ripple: FC<Props> = memo(({ children, ...props }) => {
  const { bind, ripples } = useRipple(props)
  return (
    <RippleRoot {...bind()}>
      {ripples}
      {children}
    </RippleRoot>
  )
})
