import lengthToPx from "./length-to-px";

describe("lengthToPx", () => {
  it("returns length in integer px units when given a px length string", () => {
    expect(lengthToPx("321px")).toBe(321);
  });
});
