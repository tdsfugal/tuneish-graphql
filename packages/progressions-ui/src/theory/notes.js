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

export default [
  {
    tone: 0, // number of half steps up from C
    names: [Cn, Bs, Dbb],
    sofledge: ["do"],
  },
  {
    tone: 1,
    names: [Cs, Db],
    sofledge: ["di", "ra"],
  },
  {
    tone: 2,
    names: [Dn, Css, Ebb],
    sofledge: ["re"],
  },
  {
    tone: 3,
    names: [Ds, Eb],
    sofledge: ["ri", "me"],
  },
  {
    tone: 4,
    names: [En, Css, Fb],
    sofledge: ["mi"],
  },
  {
    tone: 5,
    names: [Fn, Es, Gbb],
    sofledge: ["fa"],
  },
  {
    tone: 6,
    names: [Fs, Ess, Gb],
    sofledge: ["fi", "se"],
  },
  {
    tone: 7,
    names: [Gn, Fss, Abb],
    sofledge: ["sol"],
  },
  {
    tone: 8,
    names: [Gs, Ab],
    sofledge: ["si", "le"],
  },
  {
    tone: 9,
    names: [An, Gss, Bbb],
    sofledge: ["la"],
  },
  {
    tone: 10,
    names: [As, Bb],
    sofledge: ["le", "te"],
  },
  {
    tone: 11,
    names: [Bn, Ass, Cb],
    sofledge: ["ti"],
  },
]
