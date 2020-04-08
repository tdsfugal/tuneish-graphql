// Unicode
const DOUBLE_FLAT = "\u{1D12B}"
const FLAT = "\u266D"
const NATURAL = "\u266E"
const SHARP = "\u266F"
const DOUBLE_SHARP = "\u{1D12A}"

// Naturals
const An = "A"
const Bn = "B"
const Cn = "C"
const Dn = "D"
const En = "E"
const Fn = "F"
const Gn = "G"

// Sharps
const Ab = An + FLAT
const Bb = Bn + FLAT
const Cb = Cn + FLAT
const Db = Dn + FLAT
const Eb = En + FLAT
const Fb = Fn + FLAT
const Gb = Gn + FLAT

// Flats
const As = An + SHARP
const Bs = Bn + SHARP
const Cs = Cn + SHARP
const Ds = Dn + SHARP
const Es = En + SHARP
const Fs = Fn + SHARP
const Gs = Gn + SHARP

// Double sharps
const Ass = An + DOUBLE_SHARP
const Bss = Bn + DOUBLE_SHARP
const Css = Cn + DOUBLE_SHARP
const Dss = Dn + DOUBLE_SHARP
const Ess = En + DOUBLE_SHARP
const Fss = Fn + DOUBLE_SHARP
const Gss = Gn + DOUBLE_SHARP

// Double flats
const Abb = An + DOUBLE_FLAT
const Bbb = Bn + DOUBLE_FLAT
const Cbb = Cn + DOUBLE_FLAT
const Dbb = Dn + DOUBLE_FLAT
const Ebb = En + DOUBLE_FLAT
const Fbb = Fn + DOUBLE_FLAT
const Gbb = Gn + DOUBLE_FLAT

// There are forur ways to write the chromatic scale
const doubleFlats = [Dbb, Db, Ebb, Eb, Fb, Gbb, Gb, Abb, Ab, Bbb, Bb, Cb]
const singleFlats = [Cn, Db, Dn, Eb, En, Fn, Gb, Gn, Ab, An, Bb, Bn]
const singleSharps = [Cn, Cs, Dn, Ds, En, Fn, Fs, Gn, Gs, An, As, Bn]
const doubleSharps = [Bs, Cs, Css, Ds, Dss, Es, Ess, Fss, Gs, Gss, As, Ass]

const extendedChromatic = doubleFlats
  .concat(singleFlats)
  .concat(singleSharps)
  .concat(doubleSharps)

// The goal in selecting note sets for keys is to not have any duplicate names.
//
// Theorem:  Every 12 pitch sequence in extendedChromatic has a unique set of
//           note names.  (proof by observation)
//
// Also, the set should contain only sharps or flats, never a mix.

function upByFifth(x) {
  return (x + 7) % 12
}

function downByFourth(x) {
  return (x - 7) % 12
}

const sharp_circle = []
const flat_circle = []
let y = 0
let z = 0
for (let i = 0; i < 12; i++) {
  sharp_circle.push(spiral[y + 24])
  flat_circle.push(spiral[z + 24])
  y = upByFifth(y)
  z = downByFourth(z)
  console.log(z)
}

console.log(sharp_circle)
console.log(flat_circle)
