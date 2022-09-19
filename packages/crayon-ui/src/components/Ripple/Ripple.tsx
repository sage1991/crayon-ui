import { FC, memo, PointerEvent, useRef, useState, AnimationEvent } from "react"
import { ColorVariant } from "@emotion/react"

import { useMeasure } from "../../hooks"

import { fadeOut, RippleEffect, RippleRoot } from "./Ripple.styled"

interface Props {
  color?: ColorVariant
  center?: boolean
}

export const Ripple: FC<Props> = memo(({ color = "primary", center }) => {
  const currentRippleKey = useRef<string | null>()
  const { ref, rect } = useMeasure()
  const [effects, setEffects] = useState<JSX.Element[]>([])

  const removeRippleByKey = (key: string) => (e: AnimationEvent) => {
    if (e.animationName === fadeOut.name) {
      setEffects((prev) => prev.filter((effect) => effect.key !== key))
    }
  }

  const hideEffect = () => {
    if (!currentRippleKey.current) {
      return
    }
    const key = currentRippleKey.current
    currentRippleKey.current = null
    setEffects((prev) =>
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
  }

  const showEffect = ({ clientX, clientY }: PointerEvent<HTMLSpanElement>) => {
    if (currentRippleKey.current) {
      hideEffect()
    }

    const { left, top, width, height } = rect.current
    const cx = center ? width / 2 : clientX - left
    const cy = center ? height / 2 : clientY - top
    const radius = Math.sqrt(
      Math.pow(Math.max(cx, width - cx), 2) + Math.pow(Math.max(cy, height - cy), 2)
    )
    const key = `${performance.now()}`
    currentRippleKey.current = key
    setEffects((prev) => [
      ...prev,
      <RippleEffect key={key} color={color} radius={radius} cx={cx} cy={cy} />
    ])
  }

  return (
    <RippleRoot
      ref={ref}
      onPointerDown={showEffect}
      onPointerMove={hideEffect}
      onPointerUp={hideEffect}
    >
      {effects}
    </RippleRoot>
  )
})
