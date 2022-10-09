import { hsl } from "./hsl"
import { analyze } from "./analyze"
import { lighten } from "./lighten"

describe("lighten", () => {
  it("should lighten color", () => {
    const sourceColor = "#ffcdd2"
    const darkenColor = lighten(sourceColor, 0.5)
    const sourceHsl = hsl(analyze(sourceColor).value)
    const lightenHsl = hsl(analyze(darkenColor).value)
    expect(lightenHsl.lightness).toBeGreaterThan(sourceHsl.lightness)
  })
})
