import getLinkPos from "./get-link-pos";

// The mock values for the button dimensions are:
//   button_height = 30px
//   margin = 10px
jest.mock("src/design");

const argsGenerator = function* () {
  while (true) {
    yield { yPos: 100, nButtons: 2, linksHeight: 1000 };
  }
};

const args = argsGenerator();

describe("getLinkPos", () => {
  it("returns null whey yPos is negative", () => {
    expect(getLinkPos({ ...args.next().value, yPos: -1 })).toBe(
      `yPos=-1 out of bounds`
    );
  });

  it("returns null whey yPos is greater than the links height", () => {
    expect(getLinkPos({ ...args.next().value, yPos: 1001 })).toBe(
      `yPos=1001 out of bounds`
    );
  });

  it("picks zero when there are no buttons", () => {
    expect(getLinkPos({ ...args.next().value, nButtons: 0 })).toEqual({
      type: "gap",
      pos: 0,
    });
  });

  it("returns [gap, 0] when in the gap above the first button", () => {
    const expected = { type: "gap", pos: 0 };
    expect(getLinkPos({ ...args.next().value, yPos: 0 })).toEqual(expected);
    expect(getLinkPos({ ...args.next().value, yPos: 5 })).toEqual(expected);
    expect(getLinkPos({ ...args.next().value, yPos: 9 })).toEqual(expected);
  });

  it("returns [button, 0] when cursor is over the first button", () => {
    const expected = { type: "button", pos: 0 };
    expect(getLinkPos({ ...args.next().value, yPos: 10 })).toEqual(expected);
    expect(getLinkPos({ ...args.next().value, yPos: 25 })).toEqual(expected);
    expect(getLinkPos({ ...args.next().value, yPos: 40 })).toEqual(expected);
  });

  it("returns [gap, 1] when cursor is between first and second buttons", () => {
    const expected = { type: "gap", pos: 1 };
    expect(getLinkPos({ ...args.next().value, yPos: 41 })).toEqual(expected);
    expect(getLinkPos({ ...args.next().value, yPos: 45 })).toEqual(expected);
    expect(getLinkPos({ ...args.next().value, yPos: 49 })).toEqual(expected);
  });

  it("returns [button, 1] when cursor is over the second button", () => {
    const expected = { type: "button", pos: 1 };
    expect(getLinkPos({ ...args.next().value, yPos: 50 })).toEqual(expected);
    expect(getLinkPos({ ...args.next().value, yPos: 65 })).toEqual(expected);
    expect(getLinkPos({ ...args.next().value, yPos: 80 })).toEqual(expected);
  });

  it("returns [gap, 2] when cursor is below the second (last) button", () => {
    const expected = { type: "gap", pos: 2 };
    expect(getLinkPos({ ...args.next().value, yPos: 81 })).toEqual(expected);
    expect(getLinkPos({ ...args.next().value, yPos: 500 })).toEqual(expected);
    expect(getLinkPos({ ...args.next().value, yPos: 999 })).toEqual(expected);
  });
});
