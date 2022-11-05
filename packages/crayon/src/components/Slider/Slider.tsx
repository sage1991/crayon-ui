import { forwardRef, InputHTMLAttributes, useRef } from "react"

import { useForkElementRef } from "../../hooks"
import { Thumb } from "../Thumb"
import { useSlider } from "./useSlider"
import { ColorVariant } from "../../theme"

import { Input, Rail, SliderRoot, Point, ThumbContainer, Track } from "./Slider.styled"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorVariant
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
}

export const Slider = forwardRef<HTMLInputElement, Props>(
  ({ className, style, color, disabled, ...props }, ref) => {
    color = disabled ? "disabled" : color ?? "primary"
    const inputRef = useRef<HTMLInputElement>(null)
    const forkRef = useForkElementRef<HTMLInputElement>(ref, inputRef)
    const { measure, tap, drag, points, trackStyle, thumbStyle } = useSlider({
      ...props,
      disabled,
      inputRef
    })

    return (
      <SliderRoot {...measure()} {...tap()} className={className} style={style} color={color}>
        <Rail>
          {points.map((position) => (
            <Point key={position} position={position} />
          ))}
          <Track style={trackStyle} />
        </Rail>
        <ThumbContainer {...drag()} style={thumbStyle}>
          <Thumb color={color}>
            <Input {...forkRef()} {...props} type="range" />
          </Thumb>
        </ThumbContainer>
      </SliderRoot>
    )
  }
)
