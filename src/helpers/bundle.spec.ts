import { truncateText, getCropBy } from "./bundle"

import bundleItems from "mocks/bundle-items.json"

describe("helpers/bundle", () => {
  describe("cropBy", () => {
    it("should return found element", () => {
      expect(getCropBy(bundleItems[0].afbeelding.crops, "type", "liggend_breed")).toStrictEqual({
        type: "liggend_breed",
        height: 400,
        width: 1200,
        ratio: "3:1",
        path:
          "https://www.rtlboulevard.nl/sites/default/files/styles/liggend_breed/public/content/images/2018/06/19/ANP-56919532.jpg?itok=MLl64WFL",
      })
    })
    it("should return undefined if nothing is found", () => {
      expect(getCropBy(bundleItems[0].afbeelding.crops, "type", "privet")).toBe(undefined)
    })
  })
  describe("truncateText", () => {
    it('it should return text "as is" if string length is less than max amount', () => {
      expect(truncateText("Hello test!")).toBe("Hello test!")
    })
    it("should add three dots to text after truncation", () => {
      expect(truncateText("Hello test!", 10)).toBe("Hello test...")
    })
    it("should trim text if end symbol is a space", () => {
      expect(truncateText("Hello test!", 6)).toBe("Hello...")
    })
  })
})
