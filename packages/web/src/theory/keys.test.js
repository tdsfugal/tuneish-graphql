import Keys, { MAJOR_KEYS, MINROR_KEYS, ALL_KEYS } from "./keys"

describe("Music keys", () => {
  it("generates random major keys", () => {
    for (let i = 0; i < 100; i++) {
      const foo = Keys.randomKey("Major")
      expect(MAJOR_KEYS).toContain(foo)
    }
  })

  it("generates random minor keys", () => {
    for (let i = 0; i < 100; i++) {
      const foo = Keys.randomKey("minor")
      expect(MINOR_KEYS).toContain(foo)
    }
  })

  it("generates random keys", () => {
    for (let i = 0; i < 100; i++) {
      const foo = randomKey("All")
      expect(ALL_KEYS).toContain(foo)
      const bar = randomKey()
      expect(ALL_KEYS).toContain(bar)
    }
  })
})
