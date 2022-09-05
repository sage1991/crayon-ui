import { FC } from "react"
import { AppProps } from "next/app"
import { RootProvider } from "../context"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  )
}

export default App
