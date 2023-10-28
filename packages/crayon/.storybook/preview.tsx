import { DefaultGlobalStyle, ThemeProvider, Showcase } from "../src"
import { Decorator } from "@storybook/react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withTheme: Decorator = (Story, context) => (
  <ThemeProvider>
    <DefaultGlobalStyle />
    <Story {...context} />
  </ThemeProvider>
)

const withLayout: Decorator = (Story, context) => (
  <Showcase title={`${context.title} ${context.story}`}>
    <Story {...context} />
  </Showcase>
)

export const decorators = [ withTheme, withLayout ]
