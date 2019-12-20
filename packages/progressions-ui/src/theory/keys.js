import {
  An,
  Bn,
  Cn,
  Dn,
  En,
  Fn,
  Gn,
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
    notes: [Gb, Ab, Bb, Cb, Db, Eb, Fn],
  },
  {
    name: Db,
    type: "Major",
    acc: -5,
    notes: [Db, Eb, Fn, Gb, Ab, Bb, Cn],
  },
  {
    name: Ab,
    type: "Major",
    acc: -4,
    notes: [Ab, Bb, Cn, Db, Eb, Fn, Gn],
  },
  {
    name: Eb,
    type: "Major",
    acc: -3,
    notes: [Eb, Fn, Gn, Ab, Bb, Cn, Dn],
  },
  {
    name: Bb,
    type: "Major",
    acc: -2,
    notes: [Bb, Cn, Dn, Eb, Fn, Gn, An],
  },
  {
    name: Fn,
    type: "Major",
    acc: -1,
    notes: [Fn, Gn, An, Bb, Cn, Dn, En],
  },
  {
    name: Cn,
    type: "Major",
    acc: 0,
    notes: [Cn, Dn, En, Fn, Gn, An, Bn],
  },
  {
    name: Gn,
    type: "Major",
    acc: +1,
    notes: [Gn, An, Bn, Cn, Dn, En, Fs],
  },
  {
    name: Dn,
    type: "Major",
    acc: +2,
    notes: [Dn, En, Fs, Gn, An, Bn, Cs],
  },
  {
    name: An,
    type: "Major",
    acc: +3,
    notes: [An, Bn, Cs, Dn, En, Fs, Gs],
  },
  {
    name: En,
    type: "Major",
    acc: +4,
    notes: [En, Fs, Gs, An, Bn, Cs, Ds],
  },
  {
    name: Bn,
    type: "Major",
    acc: +5,
    notes: [Bn, Cs, Ds, En, Fs, Gs, As],
  },
  {
    name: Fs,
    type: "Major",
    acc: +6,
    notes: [Fs, Gs, As, Bn, Cs, Ds, Es],
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
    notes: [Eb, Fn, Gb, Ab, Bb, Cb, Db],
  },
  {
    name: Bb,
    type: "minor",
    acc: -5,
    notes: [Bb, Cn, Db, Eb, Fn, Gb, Ab],
  },
  {
    name: Fn,
    type: "minor",
    acc: -4,
    notes: [Fn, Gn, Ab, Bb, Cn, Db, Eb],
  },
  {
    name: Cn,
    type: "minor",
    acc: -3,
    notes: [Cn, Dn, Eb, Fn, Gn, Ab, Bb],
  },
  {
    name: Gn,
    type: "minor",
    acc: -2,
    notes: [Gn, An, Bb, Cn, Dn, Eb, Fn],
  },
  {
    name: Dn,
    type: "minor",
    acc: -1,
    notes: [Dn, En, Fn, Gn, An, Bb, Cn],
  },
  {
    name: An,
    type: "minor",
    acc: 0,
    notes: [An, Bn, Cn, Dn, En, Fn, Gn],
  },
  {
    name: En,
    type: "minor",
    acc: +1,
    notes: [En, Fs, Gn, An, Bn, Cn, Dn],
  },
  {
    name: Bn,
    type: "minor",
    acc: +2,
    notes: [Bn, Cs, Dn, En, Fs, Gn, An],
  },
  {
    name: Fs,
    type: "minor",
    acc: +3,
    notes: [Fs, Gs, An, Bn, Cs, Dn, En],
  },
  {
    name: Cs,
    type: "minor",
    acc: +4,
    notes: [Cs, Ds, En, Fs, Gs, An, Bn],
  },
  {
    name: Gs,
    type: "minor",
    acc: +5,
    notes: [Gs, As, Bn, Cs, Ds, En, Fs],
  },
  {
    name: Ds,
    type: "minor",
    acc: +6,
    notes: [Ds, Es, Fs, Gs, As, Bn, Cs],
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
