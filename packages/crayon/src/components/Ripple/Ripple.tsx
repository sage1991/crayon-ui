import { FC, memo, ReactNode } from "react"

import { ColorVariant } from "../../theme"
import { RippleRoot } from "./Ripple.styled"
import { useRipple } from "./useRipple"

interface Props {
  color?: ColorVariant
  center?: boolean
  disabled?: boolean
  children?: ReactNode
}

export const Ripple: FC<Props> = memo(({ children, ...props }) => {
  const { bind, ripple } = useRipple(props)
  return (
    <RippleRoot {...bind()}>
      {ripple}
      {children}
    </RippleRoot>
  )
})
