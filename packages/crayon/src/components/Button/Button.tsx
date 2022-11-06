import { ButtonHTMLAttributes, FC } from "react"

import { ColorVariant } from "../../theme"
import { Ripple } from "../Ripple"

import { ButtonRoot } from "./Button.styled"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorVariant
  variant?: "contained" | "outlined" | "text"
}

export const Button: FC<Props> = ({
  color = "primary",
  variant = "contained",
  disabled = false,
  children,
  ...rest
}) => {
  color = disabled ? "disabled" : color
  return (
    <ButtonRoot {...rest} color={color} variant={variant} disabled={disabled}>
      {children}
      <Ripple color={color} disabled={disabled} />
    </ButtonRoot>
  )
}
