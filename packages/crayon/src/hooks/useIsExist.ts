import { DependencyList, useMemo } from "react"

const isValueExist = (value: any) => typeof value !== "undefined" && value !== null

export const useIsExist = (...values: DependencyList) => {
  return useMemo<boolean>(() => {
    return values.reduce<boolean>((acc, value) => acc && isValueExist(value), true)
  }, values)
}
