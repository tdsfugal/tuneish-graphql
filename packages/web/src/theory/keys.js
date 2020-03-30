import {
  Bbb,
  Ab,
  Bb,
  Cb,
  Db,
  Eb,
  Fb,
  Gb,
  An,
  Bn,
  Cn,
  Dn,
  En,
  Fn,
  Gn,
  As,
  Bs,
  Cs,
  Ds,
  Es,
  Fs,
  Gs,
  Ass,
  Css,
  Dss,
  Fss,
  Gss,
} from "./note-names"

// Proper names for the given major key around the circle of fifths
const CIRCLE_NAMES_BY_MAJOR_KEY = {
  // Extended sharps
  [Bs]: [Bs, Fss, Css, Gss, Dss, Ass, Fs, Cs, Gs, Ds, As, Es],
  [Es]: [Bs, Fss, Css, Gss, Dss, Bn, Fs, Cs, Gs, Ds, As, Es],
  [As]: [Bs, Fss, Css, Gss, En, Bn, Fs, Cs, Gs, Ds, As, Es],
  [Ds]: [Bs, Fss, Css, An, En, Bn, Fs, Cs, Gs, Ds, As, Es],
  [Gs]: [Bs, Fss, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Es],

  // Normal keys
  [Cs]: [Bs, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Es],
  [Fs]: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Es],
  [Bn]: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],
  [En]: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],
  [An]: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],
  [Dn]: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],
  [Gn]: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],

  [Cn]: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn], // Could be sharps or flats

  [Fn]: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
  [Bb]: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
  [Eb]: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
  [Ab]: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
  [Db]: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
  [Gb]: [Cn, Gn, Dn, An, En, Cb, Gb, Db, Ab, Eb, Bb, Fn],
  [Cb]: [Cn, Gn, Dn, An, Fb, Cb, Gb, Db, Ab, Eb, Bb, Fn],

  // Extended flats
  [Fb]: [Cn, Gn, Dn, Bbb, Fb, Cb, Gb, Db, Ab, Eb, Bb, Fn],
}

// Proper names for the notes in chromatic scale order by major key
const CHROMATIC_NAMES_BY_MAJOR_KEY = {
  // Extended sharps
  [Bs]: [Bs, Cs, Css, Ds, Dss, Es, Fs, Fss, Gs, Gss, As, Ass],
  [Es]: [Bs, Cs, Css, Ds, Dss, Es, Fs, Fss, Gs, Gss, As, Bn],
  [As]: [Bs, Cs, Css, Ds, En, Es, Fs, Fss, Gs, Gss, As, Bn],
  [Ds]: [Bs, Cs, Css, Ds, En, Es, Fs, Fss, Gs, An, As, Bn],
  [Gs]: [Bs, Cs, Dn, Ds, En, Es, Fs, Fss, Gs, An, As, Bn],

  // Normal keys
  [Cs]: [Bs, Cs, Dn, Ds, En, Es, Fs, Gn, Gs, An, As, Bn],
  [Fs]: [Cn, Cs, Dn, Ds, En, Es, Fs, Gn, Gs, An, As, Bn],
  [Bn]: [Cn, Cs, Dn, Ds, En, Fn, Fs, Gn, Gs, An, As, Bn],
  [En]: [Cn, Cs, Dn, Ds, En, Fn, Fs, Gn, Gs, An, As, Bn],
  [An]: [Cn, Cs, Dn, Ds, En, Fn, Fs, Gn, Gs, An, As, Bn],
  [Dn]: [Cn, Cs, Dn, Ds, En, Fn, Fs, Gn, Gs, An, As, Bn],
  [Gn]: [Cn, Cs, Dn, Ds, En, Fn, Fs, Gn, Gs, An, As, Bn],

  [Cn]: [Cn, Cs, Dn, Ds, En, Fn, Fs, Gn, Gs, An, As, Bn], // Could be sharps or flats

  [Fn]: [Cn, Db, Dn, Eb, En, Fn, Gb, Gn, Ab, An, Bb, Bn],
  [Bb]: [Cn, Db, Dn, Eb, En, Fn, Gb, Gn, Ab, An, Bb, Bn],
  [Eb]: [Cn, Db, Dn, Eb, En, Fn, Gb, Gn, Ab, An, Bb, Bn],
  [Ab]: [Cn, Db, Dn, Eb, En, Fn, Gb, Gn, Ab, An, Bb, Bn],
  [Db]: [Cn, Db, Dn, Eb, En, Fn, Gb, Gn, Ab, An, Bb, Bn],
  [Gb]: [Cn, Db, Dn, Eb, En, Fn, Gb, Gn, Ab, An, Bb, Cb],
  [Cb]: [Cn, Db, Dn, Eb, Fb, Fn, Gb, Gn, Ab, An, Bb, Cb],

  // Extended flats
  [Fb]: [Cn, Db, Dn, Eb, Fb, Fn, Gb, Gn, Ab, Bbb, Bb, Cb],
}

export const MAJOR_KEYS = [
  {
    name: Cb,
    type: "Major",
    acc: -7,
    tones: [11, 1, 3, 4, 6, 8, 10],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Cb],
    // TODO - Use one or the toher, not both. Single referene.  Prefer
    // NoteNames in chromatic form.  An index map covers the circle use case.
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Cb],
  },
  {
    name: Gb,
    type: "Major",
    acc: -6,
    tones: [6, 8, 10, 11, 1, 3, 5],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Gb],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Gb],
  },
  {
    name: Db,
    type: "Major",
    acc: -5,
    tones: [1, 3, 5, 6, 8, 10, 0],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Db],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Db],
  },
  {
    name: Ab,
    type: "Major",
    acc: -4,
    tones: [8, 10, 0, 1, 3, 5, 7],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Ab],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Ab],
  },
  {
    name: Eb,
    type: "Major",
    acc: -3,
    tones: [3, 5, 7, 8, 10, 0, 2],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Eb],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Eb],
  },
  {
    name: Bb,
    type: "Major",
    acc: -2,
    tones: [10, 0, 2, 3, 5, 7, 9],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Bb],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Bb],
  },
  {
    name: Fn,
    type: "Major",
    acc: -1,
    tones: [5, 7, 9, 10, 0, 2, 4],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Fn],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Fn],
  },

  // TODO - implement both C major keys and A minor keys (sharps and flats)
  {
    name: Cn,
    type: "Major",
    acc: 0,
    tones: [0, 2, 4, 5, 7, 9, 11],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Cn],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Cn],
  },
  {
    name: Gn,
    type: "Major",
    acc: +1,
    tones: [7, 9, 11, 0, 2, 4, 6],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Gn],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Gn],
  },
  {
    name: Dn,
    type: "Major",
    acc: +2,
    tones: [2, 4, 6, 7, 9, 11, 1],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Dn],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Dn],
  },
  {
    name: An,
    type: "Major",
    acc: +3,
    tones: [9, 11, 1, 2, 4, 6, 8],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[An],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[An],
  },
  {
    name: En,
    type: "Major",
    acc: +4,
    tones: [4, 6, 8, 9, 11, 1, 3],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[En],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[En],
  },
  {
    name: Bn,
    type: "Major",
    acc: +5,
    tones: [11, 1, 3, 4, 6, 8, 10],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Bn],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Bn],
  },
  {
    name: Fs,
    type: "Major",
    acc: +6,
    tones: [6, 8, 10, 11, 1, 3, 5],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Fs],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Fs],
  },
  {
    name: Cs,
    type: "Major",
    acc: +7,
    tones: [1, 3, 5, 6, 8, 10, 0],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Cs],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Cs],
  },
]

export const MAJOR_KEYS_BY_ROOT_TONE = {
  0: [7],
  1: [2, 14],
  2: [9],
  3: [4],
  4: [11],
  5: [6],
  6: [1, 13],
  7: [8],
  8: [3],
  9: [10],
  10: [5],
  11: [0, 12],
}

// The note names follow the major scale equivalent.  This avoids double accidentals.
export const MINOR_KEYS = [
  {
    name: Ab,
    type: "minor",
    acc: -7,
    tones: [8, 10, 11, 1, 3, 4, 6],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Cb],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Cb],
  },
  {
    name: Eb,
    type: "minor",
    acc: -6,
    tones: [3, 5, 6, 8, 10, 11, 1],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Gb],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Gb],
  },
  {
    name: Bb,
    type: "minor",
    acc: -5,
    tones: [10, 0, 1, 3, 5, 6, 8],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Db],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Db],
  },
  {
    name: Fn,
    type: "minor",
    acc: -4,
    tones: [5, 7, 8, 10, 0, 1, 3],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Ab],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Ab],
  },
  {
    name: Cn,
    type: "minor",
    acc: -3,
    tones: [0, 2, 3, 5, 7, 8, 10],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Eb],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Eb],
  },
  {
    name: Gn,
    type: "minor",
    acc: -2,
    tones: [7, 9, 10, 0, 2, 3, 5],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Bb],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Bb],
  },
  {
    name: Dn,
    type: "minor",
    acc: -1,
    tones: [2, 4, 5, 7, 9, 10, 0],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Fn],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Fn],
  },
  {
    name: An,
    type: "minor",
    acc: 0,
    tones: [9, 11, 0, 2, 4, 5, 7],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Cn],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Cn],
  },
  {
    name: En,
    type: "minor",
    acc: +1,
    tones: [4, 6, 7, 9, 11, 0, 2],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Gn],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Gn],
  },
  {
    name: Bn,
    type: "minor",
    acc: +2,
    tones: [11, 1, 2, 4, 6, 7, 9],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Dn],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Dn],
  },
  {
    name: Fs,
    type: "minor",
    acc: +3,
    tones: [6, 8, 9, 11, 1, 2, 4],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[An],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[An],
  },
  {
    name: Cs,
    type: "minor",
    acc: +4,
    tones: [1, 3, 4, 6, 8, 9, 11],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[En],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[En],
  },
  {
    name: Gs,
    type: "minor",
    acc: +5,
    tones: [8, 10, 11, 1, 3, 4, 6],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Bn],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Bn],
  },
  {
    name: Ds,
    type: "minor",
    acc: +6,
    tones: [3, 5, 6, 8, 10, 11, 1],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Fs],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Fs],
  },
  {
    name: As,
    type: "minor",
    acc: +7,
    tones: [10, 0, 1, 3, 5, 6, 8],
    chromaticNames: CHROMATIC_NAMES_BY_MAJOR_KEY[Cs],
    circleNames: CIRCLE_NAMES_BY_MAJOR_KEY[Cs],
  },
]

export const MINOR_KEYS_BY_ROOT_TONE = {
  0: [4],
  1: [11],
  2: [6],
  3: [1, 13],
  4: [8],
  5: [3],
  6: [10],
  7: [5],
  8: [0, 12],
  9: [7],
  10: [2, 14],
  11: [9],
}

export const ALL_KEYS = MAJOR_KEYS.concat(MINOR_KEYS)

function randomIndex(nItems) {
  return Math.floor(Math.random() * nItems)
}

export default class Keys {
  static randomKey(type = "Any") {
    if (type === "Any") return ALL_KEYS[randomIndex(ALL_KEYS.length)]
    if (type === "Major") return MAJOR_KEYS[randomIndex(MAJOR_KEYS.length)]
    if (type === "minor") return MINOR_KEYS[randomIndex(MINOR_KEYS.length)]
    return null
  }

  static getKeys({ tone, type }) {
    if (type === "Major") {
      return MAJOR_KEYS_BY_ROOT_TONE[tone].map(index => MAJOR_KEYS[index])
    }
    if (type === "minor") {
      return MINOR_KEYS_BY_ROOT_TONE[tone].map(index => MINOR_KEYS[index])
    }
    return null
  }

  static getKey({ name, type }) {
    if (type === "Major") return MAJOR_KEYS.filter(k => k.name === name)[0]
    if (type === "minor") return MINOR_KEYS.filter(k => k.name === name)[0]
    return null
  }

  static getRelativeKey({ name, type }) {
    const key = this.getKey({ name, type })
    const nextTone = type === "Major" ? key.tones[5] : key.tones[2]
    const nextKeys = this.getKeys({
      tone: nextTone,
      type: type === "minor" ? "Major" : "minor",
    })
    return nextKeys[0]
  }
}
