import { FC, PropsWithChildren } from "react"
import { CacheProvider } from "@emotion/react"

import { cache } from "./cache"
import { GlobalStyle } from "../../theme"

export const EmotionProvider: FC<PropsWithChildren> = ({ children }) => (
  <CacheProvider value={cache}>
    <GlobalStyle />
    {children}
  </CacheProvider>
)
