import { FC, InputHTMLAttributes } from "react"
import { ColorVariant, css } from "@emotion/react"

import { Thumb } from "../Thumb"
import { Palette } from "../../theme"

import { Input, SwitchRoot } from "./Switch.styled"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorVariant
}

export const Switch: FC<Props> = ({ color = "primary", checked = false, ...props }) => {
  return (
    <SwitchRoot color={color} checked={checked}>
      <Thumb
        css={css`
          background-color: ${Palette.white};
          transition: transform 300ms;
          transform: ${checked ? "translateX(100%)" : "translate(0)"};
        `}
      />
      <Input {...props} type="checkbox" checked={checked} />
    </SwitchRoot>
  )
}
