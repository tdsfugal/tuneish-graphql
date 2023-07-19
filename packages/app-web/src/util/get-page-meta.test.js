import { describe, expect, test } from "@jest/globals";

jest.mock("meta/pages", () => {
  return {
    data: {
      title: "/ metadata",
    },
    children: {
      blog: {
        data: {
          title: "/blog metadata",
        },
      },
      practice: {
        children: {
          bass: {
            data: {
              title: "/practice/bass metadata",
            },
          },
        },
      },
      theory: {
        data: {
          title: "/theory metadata",
        },
        children: {
          chords: {
            data: { title: "/theory/chords metadata" },
          },
        },
      },
    },
  };
});

import getPageMeta from "./get-page-meta";

describe("getPageMeta", () => {
  test("gets the home page metadata", () => {
    expect(getPageMeta("/")).toEqual({ title: "/ metadata" });
  });

  test("gets metadata for a named root page", () => {
    expect(getPageMeta("/blog")).toEqual({ title: "/blog metadata" });
  });

  test("gets metadata for nested pages", () => {
    expect(getPageMeta("/practice/bass")).toEqual({
      title: "/practice/bass metadata",
    });
    expect(getPageMeta("/theory/chords")).toEqual({
      title: "/theory/chords metadata",
    });
  });

  test("returns intermediary node metadata when path is correct partial", () => {
    expect(getPageMeta("/theory")).toEqual({ title: "/theory metadata" });
  });

  test("returns empty object when path is erroneous partial", () => {
    expect(getPageMeta("/practice")).toEqual({});
  });

  test("returns empty object when path does not exist", () => {
    expect(getPageMeta("/shopping")).toEqual({});
    expect(getPageMeta("/practice/piano")).toEqual({});
    expect(getPageMeta("/practice/bass/tunes")).toEqual({});
  });
});
