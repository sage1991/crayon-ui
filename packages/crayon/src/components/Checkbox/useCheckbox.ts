import { ChangeEvent, useState } from "react"

import { useIsExist, useIsomorphicLayoutEffect } from "../../hooks"

interface Props {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useCheckbox = ({ checked, defaultChecked, onChange: originalOnChange }: Props) => {
  const controlled = useIsExist(checked)
  const [isIconChecked, setIsIconChecked] = useState(defaultChecked ?? checked)

  useIsomorphicLayoutEffect(() => {
    if (typeof checked === "boolean") {
      setIsIconChecked(checked)
    }
  }, [checked])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!controlled) {
      setIsIconChecked(e.target.checked)
    }
    originalOnChange?.(e)
  }

  return {
    isIconChecked,
    onChange
  }
}
