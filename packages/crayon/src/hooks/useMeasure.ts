import { useCallback, useLayoutEffect, useRef, useState } from "react"

export type Rect = Omit<DOMRectReadOnly, "toJSON">

interface Props {
  onMeasure?: (rect: Rect) => void
  onResize?: (rect: Rect) => void
}

export const useMeasure = <T extends HTMLElement = HTMLElement>(
  { onMeasure, onResize }: Props = {},
  dependency: any[] = []
) => {
  const [element, setElement] = useState<T | null>(null)
  const isDidMeasure = useRef<boolean>(false)
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
    if (element) {
      const observer = new ResizeObserver(([element]) => {
        rect.current = element.target.getBoundingClientRect()
        if (!isDidMeasure.current && onMeasure) {
          onMeasure(rect.current)
        }
        if (isDidMeasure.current && onResize) {
          onResize(rect.current)
        }
        isDidMeasure.current = true
      })
      observer.observe(element)
      return () => observer.disconnect()
    }
  }, [element, ...dependency])

  const ref = useCallback((element: T) => {
    isDidMeasure.current = false
    setElement(element)
  }, [])

  const measure = useCallback(() => ({ ref }), [ref])

  return { measure, rect }
}
