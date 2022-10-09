import { between } from "./between"

describe("between", () => {
  it("should true if number is in range", () => {
    expect(between(5, { minimum: 1, maximum: 10 })).toBe(true)
  })

  it("should false if number is out of range", () => {
    expect(between(20, { minimum: 1, maximum: 10 })).toBe(false)
  })

  it("should false if number is same as minimum or maximum when exclusive", () => {
    expect(between(10, { minimum: 1, maximum: 10, exclusive: true })).toBe(false)
  })
})
