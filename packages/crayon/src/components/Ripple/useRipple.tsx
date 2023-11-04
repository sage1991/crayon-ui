import { distance } from "@crayon-ui/utils"
import {
  createRef,
  DragEventHandler,
  FocusEvent,
  FocusEventHandler,
  MouseEvent,
  MouseEventHandler,
  Ref,
  TouchEvent,
  TouchEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react"
import { TransitionGroup } from "react-transition-group"

import { useMeasure } from "../../hooks"
import { ColorVariant } from "../../theme"
import { TweenTransition } from "../Transition"
import { RippleEffect } from "./Ripple.styled"

const delay = 80
const timeout = 300
const animation = {
  timeout,
  transition: `opacity ${timeout}ms ease-in-out`,
  begin: {
    opacity: 0
  },
  end: {
    opacity: 0.4
  }
}

interface BindRippleHandlers {
  ref: Ref<HTMLElement>
  onBlur: FocusEventHandler
  onContextMenu: MouseEventHandler
  onDragLeave: DragEventHandler
  onMouseDown: MouseEventHandler
  onMouseLeave: MouseEventHandler
  onMouseUp: MouseEventHandler
  onTouchEnd: TouchEventHandler
  onTouchMove: TouchEventHandler
  onTouchStart: TouchEventHandler
}

interface Props {
  color?: ColorVariant
  center?: boolean
  disabled?: boolean
}

export const useRipple = ({ color = "primary", center = false, disabled = false }: Props) => {
  const { measure, rect } = useMeasure<HTMLElement>()
  const [ripples, setRipples] = useState<JSX.Element[]>([])
  const isIgnoreMouseDown = useRef<boolean>(false)
  const timer = useRef<NodeJS.Timeout>()

  useEffect(
    () => () => {
      timer.current && clearTimeout(timer.current)
    },
    []
  )

  const commit = useCallback((radius: number, cx: number, cy: number) => {
    const ref = createRef<HTMLElement>()
    setRipples((prev) => [
      ...prev,
      <TweenTransition {...animation} key={`${performance.now()}`}>
        <RippleEffect ref={ref} color={color} radius={radius} cx={cx} cy={cy} timeout={timeout} />
      </TweenTransition>
    ])
  }, [])

  const stop = useCallback((e: FocusEvent | MouseEvent | TouchEvent) => {
    if (e.type === "touchmove") {
      timer.current && clearTimeout(timer.current)
    }
    setRipples((prev) => (prev.length > 0 ? prev.slice(1) : prev))
  }, [])

  const start = useCallback(
    (event: TouchEvent | MouseEvent) => {
      const isTouchEvent = "touches" in event && event.touches.length > 0
      if (!isTouchEvent && isIgnoreMouseDown.current) {
        isIgnoreMouseDown.current = false
        return
      }
      isIgnoreMouseDown.current = isTouchEvent

      const { left, top, width, height } = rect()
      const { clientX, clientY } = isTouchEvent ? event.touches[0] : (event as MouseEvent)
      const cx = center ? width / 2 : clientX - left
      const cy = center ? height / 2 : clientY - top
      const radius = distance([0, 0], [Math.max(cx, width - cx), Math.max(cy, height - cy)])
      if (isTouchEvent) {
        timer.current = setTimeout(() => commit(radius, cx, cy), delay)
        return
      }
      commit(radius, cx, cy)
    },
    [stop]
  )

  const bind = useCallback((): Partial<BindRippleHandlers> => {
    if (disabled) {
      return measure()
    }

    return {
      ...measure(),
      onBlur: stop,
      onContextMenu: stop,
      onDragLeave: stop,
      onMouseDown: start,
      onMouseUp: stop,
      onMouseLeave: stop,
      onTouchStart: start,
      onTouchMove: stop,
      onTouchEnd: stop
    }
  }, [measure, start, stop, disabled])

  return {
    bind,
    ripple: <TransitionGroup component={null}>{ripples}</TransitionGroup>
  }
}
