import { FC, InputHTMLAttributes } from "react"
import { Interpolation } from "@emotion/serialize"
import { ColorVariant, Theme } from "@emotion/react"

import { CheckBoxOutlineBlankRounded, CheckBoxRounded } from "../../icons"

import { CheckboxRoot, Input } from "./Checkbox.styled"
import { Ripple } from "../Ripple"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorVariant
  css?: Interpolation<Theme>
  icon?: JSX.Element
  checkedIcon?: JSX.Element
}

export const Checkbox: FC<Props> = ({
  css,
  style,
  className,
  icon = <CheckBoxOutlineBlankRounded />,
  checkedIcon = <CheckBoxRounded />,
  disabled = false,
  color = "primary",
  checked,
  ...props
}) => {
  return (
    <CheckboxRoot css={css} style={style} className={className} disabled={disabled} color={color}>
      {checked ? checkedIcon : icon}
      <Ripple color={color} center>
        <Input {...props} type="checkbox" />
      </Ripple>
    </CheckboxRoot>
  )
}
