jest.mock("./tokens");

import getDimensionToken from "./get-dimension-token";

describe("getDimensionToken", () => {
  it("returns the dimension token when it exists", () => {
    expect(getDimensionToken(["layout", "header_height"])).toBe("header");
  });

  it("throws error and returns null when the token does not exist", () => {
    expect(getDimensionToken(["layout", "notThere"])).toBe("Token Not Found");
    expect(getDimensionToken(["notcategory", "header_height"])).toBe(
      "Token Not Found"
    );
  });

  it("throws error and returns msg when the path is empty", () => {
    expect(getDimensionToken([])).toBe("Token Not Found");
  });

  it("throws error and returns msg when the path is too short", () => {
    expect(getDimensionToken(["layout"])).toBe("Token Not Found");
  });

  it("throws error and returns msg when the path is too long", () => {
    expect(getDimensionToken(["layout", "header", "extra"])).toBe(
      "Token Not Found"
    );
  });

  it("throws error and returns msg when the path is wrong", () => {
    expect(getDimensionToken(0)).toBe("Token Not Found");
    expect(getDimensionToken("notpath")).toBe("Token Not Found");
    expect(getDimensionToken({})).toBe("Token Not Found");
  });
});
