import { luminance } from "./luminance"

describe("luminance", () => {
  it("should calculate luminance from rgb", () => {
    expect(luminance({ red: 70, green: 156, blue: 227 })).toBeCloseTo(0.3063)
    expect(luminance({ red: 244, green: 67, blue: 54 })).toBeCloseTo(0.2351)
  })
})
