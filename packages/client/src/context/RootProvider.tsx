import { FC, PropsWithChildren } from "react"

import { EmotionProvider } from "./emotion"

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return <EmotionProvider>{children}</EmotionProvider>
}
