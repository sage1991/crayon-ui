import { CrayonTheme } from "../theme"

declare module "@emotion/react" {
  interface Theme extends CrayonTheme {}
}
