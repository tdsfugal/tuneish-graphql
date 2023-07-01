import { makeVar } from "@apollo/client";

export const HOME_MANIFEST = makeVar([
  { _id: "1", label: "one" },
  { _id: "2", label: "two" },
  { _id: "3", label: "three" },
  { _id: "4", label: "four" },
  { _id: "5", label: "five" },
]);

export const SCROLL_TO = makeVar("");
