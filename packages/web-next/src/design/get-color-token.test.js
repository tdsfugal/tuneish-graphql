jest.mock("./tokens");

import getColorToken from "./get-color-token";

describe("getColorToken", () => {
  it("returns the color token when it exists", () => {
    expect(getColorToken(["core", "primary"])).toBe("core.primary");
    expect(getColorToken(["theory", "maj"])).toBe("theory.maj");
  });

  it("throws error and returns null when the token does not exist", () => {
    expect(getColorToken(["core", "notThere"])).toBe(null);
    expect(getColorToken(["notcategory", "maj"])).toBe(null);
  });

  it("throws error and returns null when the path is empty", () => {
    expect(getColorToken([])).toBe(null);
  });

  it("throws error and returns null when the path is too short", () => {
    expect(getColorToken(["theory"])).toBe(null);
  });

  it("throws error and returns null when the path is too long", () => {
    expect(getColorToken(["theory", "maj", "extra"])).toBe(null);
  });

  it("throws error and returns null when the path is wrong", () => {
    expect(getColorToken(0)).toBe(null);
    expect(getColorToken("notpath")).toBe(null);
    expect(getColorToken({})).toBe(null);
  });
});
