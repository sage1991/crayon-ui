import { FC, InputHTMLAttributes } from "react"
import { Interpolation } from "@emotion/serialize"
import { Theme } from "@emotion/react"

import { CheckboxRoot, Input } from "./Checkbox.styled"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  css?: Interpolation<Theme>
  icon?: JSX.Element
  checkedIcon?: JSX.Element
}

export const Checkbox: FC<Props> = ({
  css,
  style,
  className,
  icon,
  checkedIcon,
  checked,
  ...props
}) => {
  return (
    <CheckboxRoot css={css} style={style} className={className}>
      <Input {...props} type="checkbox" />
    </CheckboxRoot>
  )
}
