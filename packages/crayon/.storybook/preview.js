import { ThemeProvider } from "../src"
import { Showcase } from "../src/components/Showcase"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withTheme = (Story, context) => (
  <ThemeProvider>
    <Story {...context} />
  </ThemeProvider>
)

const withLayout = (Story, context) => (
  <Showcase title={`${context.title} ${context.story}`}>
    <Story {...context} />
  </Showcase>
)

export const decorators = [ withTheme, withLayout ]