import { analyze } from "./analyze"
import { darken } from "./darken"
import { hsl } from "./hsl"

describe("darken", () => {
  it("should darken color", () => {
    const sourceColor = "#ffcdd2"
    const darkenColor = darken(sourceColor, 0.5)
    const sourceHsl = hsl(analyze(sourceColor).value)
    const darkenHsl = hsl(analyze(darkenColor).value)
    expect(darkenHsl.lightness).toBeLessThan(sourceHsl.lightness)
  })
})
