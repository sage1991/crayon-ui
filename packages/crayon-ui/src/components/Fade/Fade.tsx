import { cloneElement } from "react"
import { Transition } from "react-transition-group"
import { TimeoutProps } from "react-transition-group/Transition"

interface Props<T extends HTMLElement> extends TimeoutProps<T> {
  timeout: number
  children: JSX.Element
}

export const Fade = <T extends HTMLElement>({ children, timeout, ...rest }: Props<T>) => (
  <Transition {...rest} timeout={timeout}>
    {(status) =>
      cloneElement(children, {
        ...children.props,
        style: {
          ...children.props.style,
          transition: `opacity ${timeout}ms`,
          opacity: status === "entered" || status === "entering" ? 1 : 0
        }
      })
    }
  </Transition>
)
