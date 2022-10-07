import { useLayoutEffect, useRef } from "react"

interface Props {
  onResize?: (rect: Omit<DOMRectReadOnly, "toJSON">) => void
}

export const useMeasure = <T extends HTMLElement = HTMLElement>({ onResize }: Props = {}) => {
  const ref = useRef<T>(null)
  const rect = useRef<Omit<DOMRectReadOnly, "toJSON">>({
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
        if (onResize) {
          onResize(rect.current)
        }
      })
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [])

  return { ref, rect }
}
