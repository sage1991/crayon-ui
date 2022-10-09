import { useLayoutEffect, useRef } from "react"
import { useIsDidMount } from "./useIsDidMount"

export type Rect = Omit<DOMRectReadOnly, "toJSON">

interface Props {
  onInit?: (rect: Rect) => void
  onResize?: (rect: Rect) => void
}

export const useMeasure = <T extends HTMLElement = HTMLElement>({
  onInit,
  onResize
}: Props = {}) => {
  const ref = useRef<T>(null)
  const isDidMount = useIsDidMount()
  const rect = useRef<Rect>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    y: 0,
    x: 0,
    height: 0,
    width: 0
  })

  useLayoutEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(([element]) => {
        rect.current = element.target.getBoundingClientRect()
        if (!isDidMount.current && onInit) {
          onInit(rect.current)
        }
        if (isDidMount.current && onResize) {
          onResize(rect.current)
        }
      })
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [])

  return { ref, rect }
}
