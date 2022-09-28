import { TimeoutProps } from "react-transition-group/Transition"

export interface TransitionProps extends TimeoutProps<HTMLElement> {
  timeout: number
  children: JSX.Element
}
