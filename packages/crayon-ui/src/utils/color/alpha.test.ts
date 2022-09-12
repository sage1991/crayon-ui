import { alpha } from "./alpha"

describe("alpha", () => {
  it("should change opacity of rgb color", () => {
    expect(alpha("rgb(255, 255, 255)", 0.1)).toEqual("rgba(255, 255, 255, 0.1)")
  })
})
