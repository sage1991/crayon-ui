import { clamp } from "./clamp"

describe("clamp", () => {
  it("should clamp value between minimum and maximum values", () => {
    expect(clamp(100, { minimum: 10, maximum: 50 })).toBe(50)
    expect(clamp(1, { minimum: 10, maximum: 50 })).toBe(10)
  })
})
