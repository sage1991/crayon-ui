import { useLayoutEffect, useRef } from "react"

export const useIsDidMount = () => {
  const isDidMount = useRef<boolean>(false)
  useLayoutEffect(() => () => {
    isDidMount.current = true
  })
  return isDidMount
}
