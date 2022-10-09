import { rgb } from "./rgb"

describe("rgb", () => {
  it("should return rgb color", () => {
    const matcher = expect.objectContaining({
      red: expect.any(Number),
      green: expect.any(Number),
      blue: expect.any(Number)
    })
    expect(rgb({ hue: 0, lightness: 0, saturation: 0 })).toEqual(matcher)
  })

  it("should convert hsl to rgb", () => {
    expect(rgb({ hue: 27, lightness: 0.87, saturation: 0.36 })).toEqual({
      red: 234,
      green: 221,
      blue: 210
    })
  })
})
