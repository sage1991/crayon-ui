import { near } from "./near"

describe("near", () => {
  it("should return nearest point for given number", () => {
    expect(near(18, [0, 5, 10, 15, 20, 25, 30])).toBe(20)
  })
})
