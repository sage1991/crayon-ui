import { forwardRef, InputHTMLAttributes } from "react"
import { Interpolation } from "@emotion/serialize"
import { ColorVariant, Theme } from "@emotion/react"

import { CheckBoxOutlineBlankRounded, CheckBoxRounded } from "../../icons"
import { Ripple } from "../Ripple"

import { CheckboxRoot, Input } from "./Checkbox.styled"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorVariant
  css?: Interpolation<Theme>
  icon?: JSX.Element
  checkedIcon?: JSX.Element
}

export const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    css,
    style,
    className,
    icon = <CheckBoxOutlineBlankRounded />,
    checkedIcon = <CheckBoxRounded />,
    disabled = false,
    color = "primary",
    checked,
    ...rest
  } = props
  return (
    <CheckboxRoot css={css} style={style} className={className} disabled={disabled} color={color}>
      {checked ? checkedIcon : icon}
      <Ripple color={color} center>
        <Input {...rest} ref={ref} type="checkbox" checked={checked} />
      </Ripple>
    </CheckboxRoot>
  )
})
