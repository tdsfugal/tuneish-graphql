import {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  Ab,
  Bb,
  Cb,
  Db,
  Eb,
  Fb,
  Gb,
  As,
  Bs,
  Cs,
  Ds,
  Es,
  Fs,
  Gs,
} from "./notes"

export const majorKeys = [
  {
    name: Cb,
    type: "Major",
    acc: -7,
    notes: [Cb, Db, Eb, Fb, Gb, Ab, Bb],
  },
  {
    name: Gb,
    type: "Major",
    acc: -6,
    notes: [Gb, Ab, Bb, Cb, Db, Eb, F],
  },
  {
    name: Db,
    type: "Major",
    acc: -5,
    notes: [Db, Eb, F, Gb, Ab, Bb, C],
  },
  {
    name: Ab,
    type: "Major",
    acc: -4,
    notes: [Ab, Bb, C, Db, Eb, F, G],
  },
  {
    name: Eb,
    type: "Major",
    acc: -3,
    notes: [Eb, F, G, Ab, Bb, C, D],
  },
  {
    name: Bb,
    type: "Major",
    acc: -2,
    notes: [Bb, C, D, Eb, F, G, A],
  },
  {
    name: F,
    type: "Major",
    acc: -1,
    notes: [F, G, A, Bb, C, D, E],
  },
  {
    name: C,
    type: "Major",
    acc: 0,
    notes: [C, D, E, F, G, A, B],
  },
  {
    name: G,
    type: "Major",
    acc: +1,
    notes: [G, A, B, C, D, E, Fs],
  },
  {
    name: D,
    type: "Major",
    acc: +2,
    notes: [D, E, Fs, G, A, B, Cs],
  },
  {
    name: A,
    type: "Major",
    acc: +3,
    notes: [A, B, Cs, D, E, Fs, Gs],
  },
  {
    name: E,
    type: "Major",
    acc: +4,
    notes: [E, Fs, Gs, A, B, Cs, Ds],
  },
  {
    name: B,
    type: "Major",
    acc: +5,
    notes: [B, Cs, Ds, E, Fs, Gs, As],
  },
  {
    name: Fs,
    type: "Major",
    acc: +6,
    notes: [Fs, Gs, As, B, Cs, Ds, Es],
  },
  {
    name: Cs,
    type: "Major",
    acc: +7,
    notes: [Cs, Ds, Es, Fs, Gs, As, Bs],
  },
]

export const minorKeys = [
  {
    name: Ab,
    type: "minor",
    acc: -7,
    notes: [Ab, Bb, Cb, Db, Eb, Fb, Gb],
  },
  {
    name: Eb,
    type: "minor",
    acc: -6,
    notes: [Eb, F, Gb, Ab, Bb, Cb, Db],
  },
  {
    name: Bb,
    type: "minor",
    acc: -5,
    notes: [Bb, C, Db, Eb, F, Gb, Ab],
  },
  {
    name: F,
    type: "minor",
    acc: -4,
    notes: [F, G, Ab, Bb, C, Db, Eb],
  },
  {
    name: C,
    type: "minor",
    acc: -3,
    notes: [C, D, Eb, F, G, Ab, Bb],
  },
  {
    name: G,
    type: "minor",
    acc: -2,
    notes: [G, A, Bb, C, D, Eb, F],
  },
  {
    name: D,
    type: "minor",
    acc: -1,
    notes: [D, E, F, G, A, Bb, C],
  },
  {
    name: A,
    type: "minor",
    acc: 0,
    notes: [A, B, C, D, E, F, G],
  },
  {
    name: E,
    type: "minor",
    acc: +1,
    notes: [E, Fs, G, A, B, C, D],
  },
  {
    name: B,
    type: "minor",
    acc: +2,
    notes: [B, Cs, D, E, Fs, G, A],
  },
  {
    name: Fs,
    type: "minor",
    acc: +3,
    notes: [Fs, Gs, A, B, Cs, D, E],
  },
  {
    name: Cs,
    type: "minor",
    acc: +4,
    notes: [Cs, Ds, E, Fs, Gs, A, B],
  },
  {
    name: Gs,
    type: "minor",
    acc: +5,
    notes: [Gs, As, B, Cs, Ds, E, Fs],
  },
  {
    name: Ds,
    type: "minor",
    acc: +6,
    notes: [Ds, Es, Fs, Gs, As, B, Cs],
  },
  {
    name: As,
    type: "minor",
    acc: +7,
    notes: [As, Bs, Cs, Ds, Es, Fs, Gs],
  },
]

export const allKeys = majorKeys.concat(minorKeys)

export const randomMajorKey = () => {
  const rand = Math.floor(Math.random() * majorKeys.length)
  return majorKeys[rand]
}

export const randomMinorKey = () => {
  const rand = Math.floor(Math.random() * minorKeys.length)
  return minorKeys[rand]
}

export const randomKey = () => {
  const rand = Math.floor(Math.random() * allKeys.length)
  return allKeys[rand]
}
