import { forwardRef, InputHTMLAttributes, useRef } from "react"

import { useForkElementRef } from "../../hooks"
import { ColorVariant } from "../../theme"
import { Thumb } from "../Thumb"
import { Input, Point, Rail, SliderRoot, ThumbContainer, Track } from "./Slider.styled"
import { useSlider } from "./useSlider"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorVariant
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  marks?: boolean
}

export const Slider = forwardRef<HTMLInputElement, Props>(
  ({ className, style, disabled, color = "primary", step = 1, marks, ...props }, ref) => {
    color = disabled ? "disabled" : color
    const inputRef = useRef<HTMLInputElement>(null)
    const forkRef = useForkElementRef<HTMLInputElement>(ref, inputRef)
    const { measure, tap, drag, points, trackStyle, thumbStyle } = useSlider({
      ...props,
      step,
      disabled,
      inputRef
    })

    return (
      <SliderRoot {...measure()} {...tap()} className={className} style={style} color={color}>
        <Rail>
          {marks &&
            points.map((position) => <Point key={position} color={color} position={position} />)}
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
