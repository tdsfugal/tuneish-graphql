import {
  Abb,
  Bbb,
  Cbb,
  Dbb,
  Ebb,
  Fbb,
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
  Bss,
  Css,
  Dss,
  Ess,
  Fss,
  Gss,
} from "./note-names"

/* Half-tone offsets up from C around the circle.
 * "C: is at the 12 o'clock position, "Cs" at one o'clock, and so on.
 *
 * The offsets for the chromatic tones are:
 * 0   1   2   3   4   5   6   7   8   9   10  11
 * Cn, Cs, Dn, Ds, En, Fn, Fs, Gn, Gs, An, As, Bn
 */
const toneMap = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5]

// Proper names for the circle stations for the given tonics:
const circleMap = {
  // Extended sharps
  Bs: [Bs, Fss, Css, Gss, Dss, Ass, Fs, Cs, Gs, Ds, As, Es],
  Es: [Bs, Fss, Css, Gss, Dss, Bn, Fs, Cs, Gs, Ds, As, Es],
  As: [Bs, Fss, Css, Gss, En, Bn, Fs, Cs, Gs, Ds, As, Es],
  Ds: [Bs, Fss, Css, An, En, Bn, Fs, Cs, Gs, Ds, As, Es],
  Gs: [Bs, Fss, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Es],

  // Normal tonics
  Cs: [Bs, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Es],
  Fs: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Es],
  Bn: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],
  En: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],
  An: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],
  Dn: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],
  Gn: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],

  Cn: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn], // Could be sharps or flats

  Fn: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
  Bb: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
  Eb: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
  Ab: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
  Db: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
  Gb: [Cn, Gn, Dn, An, En, Cb, Gb, Db, Ab, Eb, Bb, Fn],
  Cb: [Cn, Gn, Dn, An, Fb, Cb, Gb, Db, Ab, Eb, Bb, Fn],

  // Extended flats
  Fb: [Cn, Gn, Dn, Bbb, Fb, Cb, Gb, Db, Ab, Eb, Bb, Fn],
}
