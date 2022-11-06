import { useCallback, useEffect, useRef } from "react"

export type Rect = Omit<DOMRectReadOnly, "toJSON">

interface Props {
  onMeasure?: (rect: Rect) => void
  onResize?: (rect: Rect) => void
}

export const useMeasure = <T extends HTMLElement = HTMLElement>(
  { onMeasure, onResize }: Props = {},
  dependency: any[] = []
) => {
  const observer = useRef<ResizeObserver | null>(null)
  const target = useRef<T | null>(null)
  const isDidMeasure = useRef<boolean>(false)

  useEffect(() => () => observer.current?.disconnect(), [])

  const observe = useCallback(
    (element: T) => {
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new ResizeObserver(([{ target }]) => {
        const rect = target.getBoundingClientRect()
        isDidMeasure.current && onResize?.(rect)
        !isDidMeasure.current && onMeasure?.(rect)
        isDidMeasure.current = true
      })
      observer.current.observe(element)
    },
    [...dependency]
  )

  const ref = useCallback(
    (element: T | null) => {
      isDidMeasure.current = false
      target.current = element
      if (element) {
        observe(element)
      }
    },
    [observe]
  )

  const measure = useCallback(() => ({ ref }), [ref])

  const rect = useCallback((): Rect => {
    if (!target.current) {
      return {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0
      }
    }
    return target.current.getBoundingClientRect()
  }, [])

  return { measure, rect }
}
