import Keys, { MAJOR_KEYS, MINOR_KEYS, ALL_KEYS } from "./keys";

describe.skip("Music keys", () => {
  it("generates random keys", () => {
    for (let i = 0; i < 100; i++) {
      const foo = Keys.randomKey("Any");
      expect(ALL_KEYS).toContain(foo);
    }
  });

  it("generates random major keys", () => {
    for (let i = 0; i < 100; i++) {
      const foo = Keys.randomKey("Major");
      expect(MAJOR_KEYS).toContain(foo);
    }
  });

  it("generates random minor keys", () => {
    for (let i = 0; i < 100; i++) {
      const foo = Keys.randomKey("minor");
      expect(MINOR_KEYS).toContain(foo);
    }
  });

  it("generates random keys by default", () => {
    for (let i = 0; i < 100; i++) {
      const foo = Keys.randomKey("Any");
      expect(ALL_KEYS).toContain(foo);
    }
  });
});
