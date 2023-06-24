jest.mock("./tokens");

import getDimensionToken from "./get-dimension-token";

describe("getDimensionToken", () => {
  it("returns the dimension token when it exists", () => {
    expect(getDimensionToken(["layout", "header_height"])).toBe("header");
  });

  it("throws error and returns null when the token does not exist", () => {
    expect(getDimensionToken(["layout", "notThere"])).toBe(null);
    expect(getDimensionToken(["notcategory", "header_height"])).toBe(null);
  });

  it("throws error and returns null when the path is empty", () => {
    expect(getDimensionToken([])).toBe(null);
  });

  it("throws error and returns null when the path is too short", () => {
    expect(getDimensionToken(["layout"])).toBe(null);
  });

  it("throws error and returns null when the path is too long", () => {
    expect(getDimensionToken(["layout", "header", "extra"])).toBe(null);
  });

  it("throws error and returns null when the path is wrong", () => {
    expect(getDimensionToken(0)).toBe(null);
    expect(getDimensionToken("notpath")).toBe(null);
    expect(getDimensionToken({})).toBe(null);
  });
});
