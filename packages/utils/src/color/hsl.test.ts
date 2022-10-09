import { hsl } from "./hsl"

describe("hsl", () => {
  it("should return hsl color", () => {
    const matcher = expect.objectContaining({
      hue: expect.any(Number),
      saturation: expect.any(Number),
      lightness: expect.any(Number)
    })
    expect(hsl({ red: 0, green: 0, blue: 0 })).toEqual(matcher)
  })

  it("should convert rgb to hsl", () => {
    expect(hsl({ red: 255, green: 72, blue: 0 })).toEqual({
      hue: expect.closeTo(17, 0),
      lightness: expect.closeTo(0.5, 0),
      saturation: expect.closeTo(1, 0)
    })

    expect(hsl({ red: 32, green: 126, blue: 64 })).toEqual({
      hue: expect.closeTo(140, 0),
      lightness: expect.closeTo(0.31, 0),
      saturation: expect.closeTo(0.595, 0)
    })

    expect(hsl({ red: 154, green: 97, blue: 220 })).toEqual({
      hue: expect.closeTo(268, 0),
      lightness: expect.closeTo(0.622, 0),
      saturation: expect.closeTo(0.637, 0)
    })
  })
})
