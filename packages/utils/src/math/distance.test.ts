import { distance } from "./distance"

describe("distance", () => {
  it("should calculate distance between two points", () => {
    expect(distance([0, 0], [1, 1])).toBeCloseTo(Math.sqrt(2))
  })
})
