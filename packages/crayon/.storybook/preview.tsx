import { DefaultGlobalStyle, ThemeProvider, Showcase } from "../src"

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
    <DefaultGlobalStyle />
    <Story {...context} />
  </ThemeProvider>
)

const withLayout = (Story, context) => (
  <Showcase title={`${context.title} ${context.story}`}>
    <Story {...context} />
  </Showcase>
)

export const decorators = [ withTheme, withLayout ]
