import {
  ROM_I,
  ROM_III,
  ROM_IV,
  ROM_V,
  ROM_VI,
  ROM_VII,
  ROM_i,
  ROM_ii,
  ROM_iii,
  ROM_iv,
  ROM_v,
  ROM_vi,
  ROM_vii,
} from "./symbols"

import { MAJ, MIN, DIM } from "./degrees"

/* Pitch (semitone) offsets up from C around the circle.
 * "C: is at the 12 o'clock position, "Cs" at one o'clock, and so on.
 *
 * The offsets for the chromatic pitches are:
 * 0   1   2   3   4   5   6   7   8   9   10  11
 * Cn, Cs, Dn, Ds, En, Fn, Fs, Gn, Gs, An, As, Bn
 */
const PITCHES = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5]

export default class CircleTheory {
  constructor(key) {
    this.key = key
  }

  getKey() {
    return this.key
  }

  getNote(pos) {
    const pitch = PITCHES[pos]

    // Compute the degree in the scale

    // TODO - Simplify this!!
    const degree = this.key.pitches.indexOf(pitch)
    let degree_name = ""
    let degree_type = null
    switch (this.key.type) {
      case "Major":
        switch (degree) {
          case 0:
            degree_name = ROM_I
            degree_type = MAJ
            break
          case 1:
            degree_name = ROM_ii
            degree_type = MIN
            break
          case 2:
            degree_name = ROM_iii
            degree_type = MIN
            break
          case 3:
            degree_name = ROM_IV
            degree_type = MAJ
            break
          case 4:
            degree_name = ROM_V
            degree_type = MAJ
            break
          case 5:
            degree_name = ROM_vi
            degree_type = MIN
            break
          case 6:
            degree_name = ROM_vii
            degree_type = DIM
            break
          default:
            break
        }
        break

      case "minor":
        switch (degree) {
          case 0:
            degree_name = ROM_i
            degree_type = MIN
            break
          case 1:
            degree_name = ROM_ii
            degree_type = DIM
            break
          case 2:
            degree_name = ROM_III
            degree_type = MAJ
            break
          case 3:
            degree_name = ROM_iv
            degree_type = MIN
            break
          case 4:
            degree_name = ROM_v
            degree_type = MIN
            break
          case 5:
            degree_name = ROM_VI
            degree_type = MAJ
            break
          case 6:
            degree_name = ROM_VII
            degree_type = MAJ
            break
          default:
            break
        }
        break

      default:
        console.log("Unknown key type")
    }
    return {
      name: this.key.circleNames[pos],
      pitch: pitch,
      degree: {
        name: degree_name,
        type: degree_type,
      },
    }
  }
}
