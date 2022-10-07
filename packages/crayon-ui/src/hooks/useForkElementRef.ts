import { ForwardedRef, MutableRefObject, RefCallback, useCallback } from "react"

type Ref<T> = MutableRefObject<T | null> | RefCallback<T | null> | ForwardedRef<T | null>

export const useForkElementRef = <T extends HTMLElement>(...refs: Array<Ref<T>>) => {
  return useCallback<RefCallback<T>>((instance) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(instance)
      } else if (ref) {
        ref.current = instance
      }
    })
  }, refs)
}
