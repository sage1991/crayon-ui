import { useEffect, useLayoutEffect } from "react"
import { isServerSide } from "@crayon-ui/utils"

export const useIsomorphicLayoutEffect = isServerSide() ? useEffect : useLayoutEffect
