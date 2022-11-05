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
  children,
  ...rest
}) => (
  <ButtonRoot color={color} variant={variant} {...rest}>
    {children}
    <Ripple color={color} />
  </ButtonRoot>
)
