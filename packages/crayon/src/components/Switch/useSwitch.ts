import { ChangeEvent, useState } from "react"

import { useIsExist, useIsomorphicLayoutEffect } from "../../hooks"

interface Props {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useSwitch = ({ checked, defaultChecked, onChange: originalOnChange }: Props) => {
  const controlled = useIsExist(checked)
  const [isOn, setIsOn] = useState(defaultChecked ?? checked ?? false)

  useIsomorphicLayoutEffect(() => {
    if (typeof checked === "boolean") {
      setIsOn(checked)
    }
  }, [checked])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!controlled) {
      setIsOn(e.target.checked)
    }
    originalOnChange?.(e)
  }

  return {
    isOn,
    onChange
  }
}
