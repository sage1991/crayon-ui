import { AnimationEvent, PointerEvent, useCallback, useRef, useState } from "react"

import { useMeasure } from "../../hooks"
import { ColorVariant } from "../../theme"

import { fadeOut, RippleEffect } from "./Ripple.styled"

interface Props {
  color?: ColorVariant
  center?: boolean
  disabled?: boolean
}

export const useRipple = ({ color = "primary", center = false, disabled = false }: Props) => {
  const rippleKey = useRef<string | null>()
  const { measure, rect } = useMeasure<HTMLSpanElement>()
  const [ripples, setRipples] = useState<JSX.Element[]>([])

  const removeRippleByKey = useCallback(
    (key: string) => (e: AnimationEvent) => {
      if (e.animationName === fadeOut.name) {
        setRipples((prev) => prev.filter((effect) => effect.key !== key))
      }
    },
    []
  )

  const hide = useCallback(() => {
    if (!rippleKey.current) {
      return
    }
    const key = rippleKey.current
    rippleKey.current = null
    setRipples((prev) =>
      prev.map((ripple) => {
        if (ripple.key !== key) {
          return ripple
        }
        return (
          <RippleEffect
            key={key}
            {...ripple.props}
            mount={false}
            onAnimationEnd={removeRippleByKey(key)}
          />
        )
      })
    )
  }, [removeRippleByKey])

  const show = useCallback(
    ({ clientX, clientY }: PointerEvent<HTMLSpanElement>) => {
      if (rippleKey.current) {
        hide()
      }

      const { left, top, width, height } = rect.current
      const cx = center ? width / 2 : clientX - left
      const cy = center ? height / 2 : clientY - top
      const radius = Math.sqrt(
        Math.pow(Math.max(cx, width - cx), 2) + Math.pow(Math.max(cy, height - cy), 2)
      )
      const key = `${performance.now()}`
      rippleKey.current = key
      setRipples((prev) => [
        ...prev,
        <RippleEffect key={key} color={color} radius={radius} cx={cx} cy={cy} />
      ])
    },
    [hide]
  )

  const bind = useCallback(() => {
    if (disabled) {
      return measure()
    }

    return {
      ...measure(),
      onPointerDown: show,
      onPointerMove: hide,
      onPointerUp: hide
    }
  }, [measure, show, hide, disabled])

  return {
    bind,
    ripples
  }
}
