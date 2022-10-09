import { normalize } from "./normalize"

describe("normalize", () => {
  it("should divide every color component by 255", () => {
    expect(normalize({ red: 255, green: 255, blue: 255 })).toEqual({
      red: 255 / 255,
      green: 255 / 255,
      blue: 255 / 255
    })
  })
})
