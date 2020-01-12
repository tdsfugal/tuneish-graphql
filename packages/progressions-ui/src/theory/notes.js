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
  Dss,
  Ess,
  Fss,
  Gss,
} from "./note-names"

import computeFrequencies from "./computeFrequencies"

export default class Notes {
  constructor() {
    this._notes = [
      {
        tone: 0, // number of half steps up from C
        names: [Cn, Bs, Dbb],
        solfege: ["do"],
        midis: [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120],
      },
      {
        tone: 1,
        names: [Cs, Db],
        solfege: ["di", "ra"],
        midis: [1, 13, 25, 37, 49, 61, 73, 85, 97, 109, 121],
      },
      {
        tone: 2,
        names: [Dn, Css, Ebb],
        solfege: ["re"],
        midis: [2, 14, 26, 38, 50, 62, 74, 86, 98, 110, 122],
      },
      {
        tone: 3,
        names: [Ds, Eb],
        solfege: ["ri", "me"],
        midis: [3, 15, 27, 39, 51, 63, 75, 87, 99, 111, 123],
      },
      {
        tone: 4,
        names: [En, Dss, Fb],
        solfege: ["mi"],
        midis: [4, 16, 28, 40, 52, 64, 76, 88, 100, 112, 124],
      },
      {
        tone: 5,
        names: [Fn, Es, Gbb],
        solfege: ["fa"],
        midis: [5, 17, 29, 41, 53, 65, 77, 89, 101, 113, 125],
      },
      {
        tone: 6,
        names: [Fs, Ess, Gb],
        solfege: ["fi", "se"],
        midis: [6, 18, 30, 42, 54, 66, 78, 90, 102, 114, 126],
      },
      {
        tone: 7,
        names: [Gn, Fss, Abb],
        solfege: ["sol"],
        midis: [7, 19, 31, 43, 55, 67, 79, 91, 103, 115, 127],
      },
      {
        tone: 8,
        names: [Gs, Ab],
        solfege: ["si", "le"],
        midis: [8, 20, 32, 44, 56, 68, 80, 92, 104, 116],
      },
      {
        tone: 9,
        names: [An, Gss, Bbb],
        solfege: ["la"],
        midis: [9, 21, 33, 45, 57, 69, 81, 93, 105, 117],
      },
      {
        tone: 10,
        names: [As, Bb],
        solfege: ["le", "te"],
        midis: [10, 22, 34, 46, 58, 70, 82, 94, 106, 118],
      },
      {
        tone: 11,
        names: [Bn, Ass, Cb],
        solfege: ["ti"],
        midis: [11, 23, 35, 47, 59, 71, 83, 95, 107, 119],
      },
    ]
    this._freq = computeFrequencies()
  }

  getNoteByTone(tone) {
    const note = this._notes[tone]
    if (note)
      return {
        tone: note.tone,
        names: note.names.slice(0),
        solfege: note.solfege.slice(0),
        midis: note.midis.slice(0), // TODO - Is all this stuff always neccesary? could be leaner and faster.
      }
    return null
  }

  getMidisByName(name) {
    let tone, i
    for (tone = 0; tone < 12; tone++) {
      const names = this._notes[tone].names
      for (i = 0; i < names.length; i++) {
        if (name === names[i]) {
          return this._notes[tone].midis.slice(0)
        }
      }
    }
  }

  getNoteByMidi(midiNumber) {
    const midi = this._freq[midiNumber]
    const note = this._notes[midi.tone]
    return {
      tone: midi.tone,
      oct: midi.oct,
      freq: midi.freq,
      names: note.names.slice(0),
      solfege: note.solfege.slice(0),
    }
  }

  getNearestMidi(freq) {
    // Find the index i where:
    //     freq <= freq[i].upper && freq > freq[i-1].upper
    //
    // then return the midi index i and the deviation from freq[i].freq
    //
    // The first step is to conduct a binary search of the frequencies to
    // get close.  Often this will be the correct value.
    //
    let range = 144
    let midpoint = range / 2
    let delta = freq - this._freq[midpoint].freq
    let newMid, newDelt
    while (range > 3) {
      newMid = Math.floor(
        delta >= 0 ? midpoint + range / 4 : midpoint - range / 4
      )
      newDelt = freq - this._freq[newMid].freq
      range = range / 2
      if (Math.abs(newDelt) < Math.abs(delta)) {
        delta = newDelt
        midpoint = newMid
      }
    }
    // Step 2 is to adjust the result using the exact .upper values
    let index = midpoint
    const upper = this._freq[midpoint].upper
    const lower = midpoint > 0 ? this._freq[midpoint - 1].upper : 0
    if (freq > upper) index += 1
    if (freq < lower) index -= 1

    // Finaly, compute the cent error
    const correct = this._freq[index].freq
    const cent = 1200 * Math.log2(freq / correct)
    return { midi: index, cent }
  }
}
