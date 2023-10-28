import { isServerSide } from "@crayon-ui/utils"
import { useEffect, useLayoutEffect } from "react"

export const useIsomorphicLayoutEffect = isServerSide() ? useEffect : useLayoutEffect
