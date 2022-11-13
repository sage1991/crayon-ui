import { ForwardedRef, MutableRefObject, ReactElement, RefCallback } from "react"

declare global {
  namespace JSX {
    interface Element extends ReactElement<any, any> {
      ref?: MutableRefObject<any> | RefCallback<any> | ForwardedRef<any> | null
    }
  }
}
