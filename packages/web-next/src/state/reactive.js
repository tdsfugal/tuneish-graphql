import { makeVar } from "@apollo/client";

import { Keys, NULL_NOTE, NULL_CHORD, Cn, MAJOR } from "/src/theory";

// The object in CURRENT_KEY must conform to the structure provided by Keys
//  {
//     name: Ab,
//     type: "minor",
//     acc: -7,
//     pitches: [8, 10, 11, 1, 3, 4, 6],
//     chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Cb],
//     circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Cb],
//   },
export const CURRENT_KEY = makeVar(Keys.getKey({ name: Cn, type: MAJOR }));

export const STABLE_NOTE = makeVar(NULL_NOTE);

export const CURRENT_CHORD = makeVar(NULL_CHORD);
