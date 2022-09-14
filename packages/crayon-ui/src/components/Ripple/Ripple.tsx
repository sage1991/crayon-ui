import { FC, memo, PointerEvent, useState } from "react"
import { ColorVariant } from "@emotion/react"

import { useMeasure } from "../../hooks"

import { RippleEffect, RippleRoot } from "./Ripple.styled"

interface Props {
  color?: ColorVariant
  center?: boolean
}

export const Ripple: FC<Props> = memo(({ color = "primary", center }) => {
  const { ref, rect } = useMeasure()
  const [effects, setEffects] = useState<JSX.Element[]>([])

  const removeEffect = (key: string) => () =>
    setEffects((prev) => prev.filter((effect) => effect.key !== key))

  const showEffect = ({ clientX, clientY }: PointerEvent<HTMLSpanElement>) => {
    const { left, top, width, height } = rect.current
    const cx = center ? width / 2 : clientX - left
    const cy = center ? height / 2 : clientY - top
    const radius = Math.sqrt(
      Math.pow(Math.max(cx, width - cx), 2) + Math.pow(Math.max(cy, height - cy), 2)
    )
    const key = `${performance.now()}`

    setEffects((prev) => [
      ...prev,
      <RippleEffect
        key={key}
        color={color}
        radius={radius}
        cx={cx}
        cy={cy}
        onAnimationEnd={removeEffect(key)}
      />
    ])
  }

  return (
    <RippleRoot ref={ref} onPointerDown={showEffect}>
      {effects}
    </RippleRoot>
  )
})
