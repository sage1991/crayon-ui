import {
  FC,
  memo,
  PointerEvent,
  useRef,
  useState,
  AnimationEvent,
  useCallback,
  ReactNode
} from "react"
import { ColorVariant } from "@emotion/react"

import { useMeasure } from "../../hooks"

import { fadeOut, RippleEffect, RippleRoot } from "./Ripple.styled"

interface Props {
  color?: ColorVariant
  center?: boolean
  children?: ReactNode
}

export const Ripple: FC<Props> = memo(({ color = "primary", center, children }) => {
  const currentRippleKey = useRef<string | null>()
  const { measure, rect } = useMeasure<HTMLSpanElement>()
  const [effects, setEffects] = useState<JSX.Element[]>([])

  const removeRippleByKey = useCallback(
    (key: string) => (e: AnimationEvent) => {
      if (e.animationName === fadeOut.name) {
        setEffects((prev) => prev.filter((effect) => effect.key !== key))
      }
    },
    []
  )

  const hideEffect = useCallback(() => {
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
  }, [removeRippleByKey])

  const showEffect = useCallback(
    ({ clientX, clientY }: PointerEvent<HTMLSpanElement>) => {
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
    },
    [hideEffect]
  )

  return (
    <RippleRoot
      {...measure()}
      onPointerDown={showEffect}
      onPointerMove={hideEffect}
      onPointerUp={hideEffect}
    >
      {effects}
      {children}
    </RippleRoot>
  )
})
