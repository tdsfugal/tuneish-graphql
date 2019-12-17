import {
  majorKeys,
  minorKeys,
  allKeys,
  randomMajorKey,
  randomMinorKey,
  randomKey,
} from "./keys"

describe("Music keys", () => {
  it("generates random major keys", () => {
    for (let i = 0; i < 100; i++) {
      const foo = randomMajorKey()
      expect(majorKeys).toContain(foo)
    }
  })

  it("generates random minor keys", () => {
    for (let i = 0; i < 100; i++) {
      const foo = randomMinorKey()
      expect(minorKeys).toContain(foo)
    }
  })

  it("generates random keys", () => {
    for (let i = 0; i < 100; i++) {
      const foo = randomKey()
      expect(allKeys).toContain(foo)
    }
  })
})
