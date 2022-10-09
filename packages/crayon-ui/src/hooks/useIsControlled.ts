import { InputHTMLAttributes, useMemo } from "react"

interface Props
  extends Pick<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "defaultValue"> {}

export const useIsControlled = ({ value, onChange, defaultValue }: Props = {}) =>
  useMemo(
    () =>
      typeof value !== "undefined" &&
      typeof onChange !== "undefined" &&
      typeof defaultValue === "undefined",
    [value, onChange, defaultValue]
  )
