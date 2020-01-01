import {
  Abb,
  Bbb,
  Dbb,
  Ebb,
  Gbb,
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
  Ess,
  Fss,
  Gss,
} from "./note-names"

const A4 = 440 // Reference pitch, hz
const semiTone = Math.pow(2, 1 / 12) // Even tempered

const An4 = A4
const As4 = A4 * Math.pow(semiTone, 1)
const Bn4 = A4 * Math.pow(semiTone, 2)
const Cn4 = A4 * Math.pow(semiTone, 3)
const Cs4 = A4 * Math.pow(semiTone, 4)
const Dn4 = A4 * Math.pow(semiTone, 5)
const Ds4 = A4 * Math.pow(semiTone, 6)
const En4 = A4 * Math.pow(semiTone, 7)
const Fn4 = A4 * Math.pow(semiTone, 8)
const Fs4 = A4 * Math.pow(semiTone, 9)
const Gn4 = A4 * Math.pow(semiTone, 10)
const Gs4 = A4 * Math.pow(semiTone, 11)

const computeFrequenciesFromFour = four => {
  return [
    four / 32,
    four / 16,
    four / 8,
    four / 4,
    four / 2,
    four,
    four * 2,
    four * 4,
    four * 8,
    four * 16,
  ]
}

export default [
  {
    tone: 0, // number of half steps up from C
    names: [Cn, Bs, Dbb],
    sofledge: ["do"],
    frequencies: computeFrequenciesFromFour(Cn4),
  },
  {
    tone: 1,
    names: [Cs, Db],
    sofledge: ["di", "ra"],
    frequencies: computeFrequenciesFromFour(Cs4),
  },
  {
    tone: 2,
    names: [Dn, Css, Ebb],
    sofledge: ["re"],
    frequencies: computeFrequenciesFromFour(Dn4),
  },
  {
    tone: 3,
    names: [Ds, Eb],
    sofledge: ["ri", "me"],
    frequencies: computeFrequenciesFromFour(Ds4),
  },
  {
    tone: 4,
    names: [En, Css, Fb],
    sofledge: ["mi"],
    frequencies: computeFrequenciesFromFour(En4),
  },
  {
    tone: 5,
    names: [Fn, Es, Gbb],
    sofledge: ["fa"],
    frequencies: computeFrequenciesFromFour(Fn4),
  },
  {
    tone: 6,
    names: [Fs, Ess, Gb],
    sofledge: ["fi", "se"],
    frequencies: computeFrequenciesFromFour(Fs4),
  },
  {
    tone: 7,
    names: [Gn, Fss, Abb],
    sofledge: ["sol"],
    frequencies: computeFrequenciesFromFour(Gn4),
  },
  {
    tone: 8,
    names: [Gs, Ab],
    sofledge: ["si", "le"],
    frequencies: computeFrequenciesFromFour(Gs4),
  },
  {
    tone: 9,
    names: [An, Gss, Bbb],
    sofledge: ["la"],
    frequencies: computeFrequenciesFromFour(An4),
  },
  {
    tone: 10,
    names: [As, Bb],
    sofledge: ["le", "te"],
    frequencies: computeFrequenciesFromFour(As4),
  },
  {
    tone: 11,
    names: [Bn, Ass, Cb],
    sofledge: ["ti"],
    frequencies: computeFrequenciesFromFour(Bn4),
  },
]
