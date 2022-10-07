import { InputHTMLAttributes } from "react"

interface Props extends Partial<InputHTMLAttributes<HTMLInputElement>> {}

export const useIsControlledInput = ({ value, onChange }: Props = {}) =>
  typeof value !== "undefined" && typeof onChange !== "undefined"
