import { useEffect, useRef } from "react"

export const useMeasure = () => {
  const ref = useRef<HTMLElement>(null)
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

  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(([element]) => {
        rect.current = element.target.getBoundingClientRect()
      })
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [])

  return { ref, rect }
}
