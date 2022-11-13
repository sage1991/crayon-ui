import { FC, InputHTMLAttributes } from "react"
import { css } from "@emotion/react"

import { Thumb } from "../Thumb"
import { ColorVariant, Palette } from "../../theme"
import { AspectRatio } from "../AspectRatio"
import { useSwitch } from "./useSwitch"

import { Input, SwitchRoot } from "./Switch.styled"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorVariant
}

export const Switch: FC<Props> = ({ color = "primary", style, className, disabled, ...props }) => {
  color = disabled ? "disabled" : color
  const { isOn, onChange } = useSwitch(props)
  return (
    <SwitchRoot style={style} className={className} color={color} checked={isOn}>
      <AspectRatio
        css={css`
          width: 50%;
          transition: transform 300ms;
          transform: ${isOn ? "translateX(100%)" : "translate(0)"};
        `}
        ratio={1}
      >
        <Thumb
          css={css`
            background-color: ${Palette.white};
          `}
        />
      </AspectRatio>
      <Input {...props} type="checkbox" disabled={disabled} checked={isOn} onChange={onChange} />
    </SwitchRoot>
  )
}
