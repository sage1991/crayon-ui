import { ratio } from "./ratio"

describe("ratio", () => {
  it("should calculate ratio from given number", () => {
    expect(ratio(50, { minimum: 0, maximum: 100 })).toBeCloseTo(0.5)
  })

  it("should calculate ratio from given number", () => {
    expect(ratio(91, { minimum: 90, maximum: 100 })).toBeCloseTo(0.1)
  })
})
