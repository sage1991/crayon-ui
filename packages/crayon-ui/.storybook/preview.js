import { ThemeProvider } from "../src"

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

export const decorators = [ withTheme ]