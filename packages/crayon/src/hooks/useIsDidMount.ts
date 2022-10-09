import { useEffect, useRef } from "react"

export const useIsDidMount = () => {
  const isDidMount = useRef<boolean>(false)
  useEffect(() => {
    queueMicrotask(() => (isDidMount.current = true))
  }, [])
  return isDidMount
}
