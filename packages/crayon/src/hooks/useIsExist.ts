import { useMemo } from "react"

const isValueExist = (value: any) => typeof value !== "undefined" && value !== null

export const useIsExist = (...values: any[]) => {
  return useMemo(() => {
    return values.reduce((acc, value) => acc && isValueExist(value), true)
  }, values)
}
