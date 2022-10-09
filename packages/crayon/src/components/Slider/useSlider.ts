import { RefObject, useEffect, useMemo } from "react"
import { useSpring } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import { clamp, near, ratio } from "@crayon-ui/utils"

import { useIsExist, useMeasure } from "../../hooks"

const DEFAULT_MINIMUM = 0
const DEFAULT_MAXIMUM = 100

interface Props {
  inputRef: RefObject<HTMLInputElement>
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  disabled?: boolean
  step?: number
}

export const useSlider = ({
  inputRef,
  value,
  defaultValue,
  min,
  max,
  step,
  disabled = false
}: Props) => {
  const minimum = min ?? DEFAULT_MINIMUM
  const maximum = max ?? DEFAULT_MAXIMUM
  const controlled = useIsExist(value)

  const points = useMemo(() => {
    const points: number[] = []
    if (!step) return points
    const _step = Math.round(step)
    const range = maximum - minimum
    const count = Math.round(1 + range / _step)
    for (let i = 0; i < count; i++) {
      points.push((100 * i * _step) / range)
    }
    if (points[points.length - 1] < 100) {
      points.push(100)
    }
    return points
  }, [step])

  const [{ x }, spring] = useSpring(() => ({
    x: 0,
    config: {
      clamp: true,
      tension: 250
    }
  }))

  // update slider when value change
  useEffect(() => {
    if (controlled && typeof value === "number") {
      const { width } = rect.current
      const _ratio = ratio(value, { minimum, maximum })
      spring.start({ x: width * _ratio })
    }
  }, [controlled, value, minimum, maximum])

  // drag gesture handler
  const drag = useDrag(
    ({ dragging, offset }) => {
      if (disabled || !dragging || !inputRef.current) {
        return
      }

      const { width } = rect.current
      const x = near(
        clamp(offset[0], { minimum: 0, maximum: width }),
        points.map((point) => (point * width) / 100)
      )
      // change event will not be dispatched when input value is not valid
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#validation
      inputRef.current.value = (minimum + ((maximum - minimum) * x) / width).toFixed(10)
      if (controlled) {
        inputRef.current.dispatchEvent(new CustomEvent("input", { bubbles: true }))
      } else {
        spring.start({ x })
      }
    },
    { from: () => [x.get(), 0] }
  )

  // tap gesture handler
  const tap = useDrag(
    ({ tap, xy }) => {
      if (disabled || !tap || !inputRef.current) {
        return
      }

      const { width, x: rectX } = rect.current
      const x = near(
        xy[0] - rectX,
        points.map((point) => (point * width) / 100)
      )
      // change event will not be dispatched when input value is not valid
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#validation
      inputRef.current.value = (minimum + ((maximum - minimum) * x) / width).toFixed(10)
      if (controlled) {
        inputRef.current.dispatchEvent(new CustomEvent("input", { bubbles: true }))
      } else {
        spring.start({ x })
      }
    },
    { from: () => [x.get(), 0] }
  )

  // measure slider size
  const { measure, rect } = useMeasure<HTMLDivElement>(
    {
      onMeasure: ({ width }) => {
        const _value = value ?? defaultValue ?? minimum + (maximum - minimum) / 2
        const _ratio = ratio(_value, { minimum, maximum })
        spring.start({ x: _ratio * width, immediate: true })
      },
      onResize: ({ width }) => {
        if (inputRef.current?.value) {
          const _value = parseInt(inputRef.current.value)
          const _ratio = ratio(_value, { minimum, maximum })
          spring.start({ x: _ratio * width, immediate: true })
        }
      }
    },
    [minimum, maximum]
  )

  const trackStyle = useMemo(() => ({ width: x }), [])
  const thumbStyle = useMemo(() => ({ x }), [])

  return {
    measure,
    drag,
    tap,
    trackStyle,
    thumbStyle,
    points
  }
}
