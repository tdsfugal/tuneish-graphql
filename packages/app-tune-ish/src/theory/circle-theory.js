import {
  Ab,
  Bb,
  Db,
  Eb,
  Gb,
  An,
  Bn,
  Cn,
  Dn,
  En,
  Fn,
  Gn,
  As,
  Cs,
  Ds,
  Fs,
  Gs,
} from "./note-names"

// Proper names for the circle stations for given number of sharps or flats:
const LABELS = {
  sharps: [Cn, Gn, Dn, An, En, Bn, Fs, Cs, Gs, Ds, As, Fn],
  flats: [Cn, Gn, Dn, An, En, Bn, Gb, Db, Ab, Eb, Bb, Fn],
}

/* Half-tone offsets up from C around the circle.
 * "C: is at the 12 o'clock position, "Cs" at one o'clock, and so on.
 *
 * The offsets for the chromatic tones are:
 * 0   1   2   3   4   5   6   7   8   9   10  11
 * Cn, Cs, Dn, Ds, En, Fn, Fs, Gn, Gs, An, As, Bn
 */
const TONES = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5]

export default class CircleTheory {
  constructor(key) {
    this.key = key
    this.labels = key.acc > 0 ? LABELS.sharps.slice(0) : LABELS.flats.slice(0)
  }

  getKey() {
    return this.key
  }

  getNote(pos) {
    const tone = TONES[pos]

    // Compute the degree in the scale

    // TODO - Simplify this!!
    const degree = this.key.tones.indexOf(tone)
    let degree_name = ""
    let degree_type = null
    switch (this.key.type) {
      case "Major":
        switch (degree) {
          case 0:
            degree_name = "I"
            degree_type = "Maj"
            break
          case 1:
            degree_name = "ii"
            degree_type = "Min"
            break
          case 2:
            degree_name = "iii"
            degree_type = "Min"
            break
          case 3:
            degree_name = "IV"
            degree_type = "Maj"
            break
          case 4:
            degree_name = "V"
            degree_type = "Maj"
            break
          case 5:
            degree_name = "vi"
            degree_type = "Min"
            break
          case 6:
            degree_name = "vii"
            degree_type = "Dim"
            break
          default:
            break
        }
        break

      case "minor":
        switch (degree) {
          case 0:
            degree_name = "i"
            degree_type = "Min"
            break
          case 1:
            degree_name = "ii"
            degree_type = "Dim"
            break
          case 2:
            degree_name = "III" // TODO = Not showing up.  Bug.
            degree_type = "Maj"
            break
          case 3:
            degree_name = "iv"
            degree_type = "Min"
            break
          case 4:
            degree_name = "v"
            degree_type = "Min"
            break
          case 5:
            degree_name = "VI"
            degree_type = "Maj"
            break
          case 6:
            degree_name = "VII"
            degree_type = "Maj"
            break
          default:
            break
        }
        break

      default:
        console.log("Unknown key type")
    }
    return {
      name: this.labels[pos],
      tone: tone,
      degree: {
        name: degree_name,
        type: degree_type,
      },
    }
  }
}
