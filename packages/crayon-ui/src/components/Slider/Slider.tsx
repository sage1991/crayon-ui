import {
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef
} from "react"
import { ColorVariant } from "@emotion/react"

import { useForkElementRef, useIsControlledInput, useIsDidMount, useMeasure } from "../../hooks"
import { Thumb } from "../Thumb"

import { Input, Rail, SliderRoot, ThumbContainer, Track } from "./Slider.styled"
import { useSpring } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import { clamp, ratio } from "../../utils"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorVariant
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"]
}

export const Slider = forwardRef<HTMLInputElement, Props>((props, inputRef) => {
  const {
    className,
    style,
    color = "primary",
    value = 0,
    defaultValue = 0,
    min = 0,
    max = 100,
    ...rest
  } = props

  const _inputRef_ = useRef<HTMLInputElement>(null)
  const forkRef = useForkElementRef<HTMLInputElement>(_inputRef_, inputRef)
  const isControlled = useIsControlledInput(props)
  const isDidMount = useIsDidMount()

  const update = useCallback(
    (x: number) => {
      if (!_inputRef_.current) {
        return
      }
      _inputRef_.current.value = (min + ((max - min) * x) / rect.current.width).toFixed(1)
      if (isControlled) {
        _inputRef_.current.dispatchEvent(new CustomEvent("input", { bubbles: true }))
      } else {
        controller.start({ x })
      }
    },
    [isControlled, min, max]
  )

  useLayoutEffect(() => {
    if (isDidMount.current && isControlled && value) {
      const x = rect.current.width * ratio(value, { minimum: min, maximum: max })
      controller.start({ x })
    }
  }, [value, isControlled])

  const { ref, rect } = useMeasure<HTMLDivElement>({
    onResize: (rect) => {
      if (value !== min || defaultValue !== min) {
        controller.start({
          x: rect.width * ratio(value ?? defaultValue, { minimum: min, maximum: max }),
          immediate: true
        })
      }
    }
  })

  const [{ x }, controller] = useSpring(() => ({
    x: 0,
    config: {
      clamp: true,
      tension: 250
    }
  }))

  const drag = useDrag(
    ({ dragging, offset }) => {
      if (dragging) {
        update(clamp(offset[0], { minimum: 0, maximum: rect.current.width }))
      }
    },
    { from: () => [x.get(), 0] }
  )

  const tap = useDrag(
    ({ tap, xy }) => {
      if (tap) {
        update(xy[0] - rect.current.x)
      }
    },
    { from: () => [x.get(), 0] }
  )

  return (
    <SliderRoot {...tap()} className={className} style={style} ref={ref} color={color}>
      <Rail color={color}>
        <Track color={color} style={{ width: x }} />
      </Rail>
      <ThumbContainer {...drag()} style={{ x }}>
        <Thumb color={color}>
          <Input {...rest} ref={forkRef} type="range" min={min} max={max} value={value} />
        </Thumb>
      </ThumbContainer>
    </SliderRoot>
  )
})
