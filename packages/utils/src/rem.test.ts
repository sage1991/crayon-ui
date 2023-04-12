import { rem } from "./rem"

describe("rem", () => {
  it("should convert px to rem", () => {
    expect(rem(16)).toEqual("1rem")
  })
})
