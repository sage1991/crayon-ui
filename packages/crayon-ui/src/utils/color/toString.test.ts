import { toString } from "./toString"

describe("toString", () => {
  it("should convert rgb color info to string", () => {
    expect(
      toString({
        type: "rgb",
        value: {
          red: 70,
          green: 156,
          blue: 227
        }
      })
    ).toEqual("rgb(70, 156, 227)")
  })

  it("should convert rgba color info to string", () => {
    expect(
      toString({
        type: "rgba",
        value: {
          red: 70,
          green: 156,
          blue: 227
        },
        alpha: 0.1
      })
    ).toEqual("rgba(70, 156, 227, 0.1)")
  })

  it("should convert hex color info to string", () => {
    expect(
      toString({
        type: "hex",
        value: {
          red: 70,
          green: 156,
          blue: 227
        }
      })
    ).toEqual("#469ce3")
  })

  it("should convert hex color with alpha info to string", () => {
    expect(
      toString({
        type: "hex",
        value: {
          red: 70,
          green: 156,
          blue: 227
        },
        alpha: 0.1
      })
    ).toEqual("#469ce31a")
  })
})
