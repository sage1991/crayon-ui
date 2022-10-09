import { analyze } from "./analyze"

describe("analyze", () => {
  it("should return ColorInfo", () => {
    const matcher = expect.objectContaining({
      type: expect.stringMatching(/^(rgb|rgba|hex)$/),
      value: expect.objectContaining({
        red: expect.any(Number),
        green: expect.any(Number),
        blue: expect.any(Number)
      })
    })
    expect(analyze("#ff0000")).toEqual(matcher)
  })

  it("should analyze rgb color", () => {
    expect(analyze("rgb(25, 47, 122)")).toEqual({
      type: "rgb",
      value: {
        red: 25,
        green: 47,
        blue: 122
      }
    })
  })

  it("should analyze rgba color", () => {
    expect(analyze("rgba(123, 0, 55, 0.8)")).toEqual({
      type: "rgba",
      value: {
        red: 123,
        green: 0,
        blue: 55
      },
      alpha: 0.8
    })
  })

  it("should analyze hex color", () => {
    expect(analyze("#fca")).toEqual({
      type: "hex",
      value: {
        red: parseInt("ff", 16),
        green: parseInt("cc", 16),
        blue: parseInt("aa", 16)
      }
    })
  })

  it("should analyze hex color", () => {
    expect(analyze("#ff2462")).toEqual({
      type: "hex",
      value: {
        red: parseInt("ff", 16),
        green: parseInt("24", 16),
        blue: parseInt("62", 16)
      }
    })
  })

  it("should analyze hex with alpha color", () => {
    expect(analyze("#efc49fef")).toEqual({
      type: "hex",
      value: {
        red: parseInt("ef", 16),
        green: parseInt("c4", 16),
        blue: parseInt("9f", 16)
      },
      alpha: expect.closeTo(parseInt("ef", 16) / 255)
    })
  })

  it("should throw error when unsupported color is given", () => {
    expect(() => analyze("hsl(10, 30%, 100%)")).toThrow()
  })
})
