import { forwardRef, InputHTMLAttributes } from "react"
import { CheckBoxOutlineBlankRounded } from "@crayon-ui/icons"

import { Ripple } from "../Ripple"

import { AnimatedCheckBoxRounded, CheckboxRoot, Input } from "./Checkbox.styled"
import { ColorVariant } from "../../theme"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorVariant
  icon?: JSX.Element
  checkedIcon?: JSX.Element
}

export const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    style,
    className,
    icon = <CheckBoxOutlineBlankRounded />,
    checkedIcon = <AnimatedCheckBoxRounded />,
    disabled = false,
    color = "primary",
    checked,
    ...rest
  } = props
  return (
    <CheckboxRoot style={style} className={className} disabled={disabled} color={color}>
      {checked ? checkedIcon : icon}
      <Ripple color={color} center>
        <Input {...rest} ref={ref} type="checkbox" checked={checked} />
      </Ripple>
    </CheckboxRoot>
  )
})
