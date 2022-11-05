import { FC, InputHTMLAttributes } from "react"
import { css } from "@emotion/react"

import { Thumb } from "../Thumb"
import { ColorVariant, Palette } from "../../theme"

import { Input, SwitchRoot } from "./Switch.styled"
import { AspectRatio } from "../AspectRatio"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorVariant
}

export const Switch: FC<Props> = ({
  color = "primary",
  checked = false,
  style,
  className,
  ...props
}) => {
  return (
    <SwitchRoot style={style} className={className} color={color} checked={checked}>
      <AspectRatio
        css={css`
          width: 50%;
          transition: transform 300ms;
          transform: ${checked ? "translateX(100%)" : "translate(0)"};
        `}
        ratio={1}
      >
        <Thumb
          css={css`
            background-color: ${Palette.white};
          `}
        />
      </AspectRatio>
      <Input {...props} type="checkbox" checked={checked} />
    </SwitchRoot>
  )
}
