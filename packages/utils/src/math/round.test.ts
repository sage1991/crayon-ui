import { round } from "./round"

describe("round", () => {
  it("should round floating point number", () => {
    expect(round(16.345, 1)).toBe(16.3)
    expect(round(16.55)).toBe(17)
    expect(round(1.271934, 3)).toBe(1.272)
  })
})
