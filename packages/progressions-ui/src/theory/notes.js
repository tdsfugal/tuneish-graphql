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

import computeFrequencies from "./computeFrequencies"

export default class Notes {
  constructor() {
    this._notes = [
      {
        tone: 0, // number of half steps up from C
        names: [Cn, Bs, Dbb],
        solfege: ["do"],
      },
      {
        tone: 1,
        names: [Cs, Db],
        solfege: ["di", "ra"],
      },
      {
        tone: 2,
        names: [Dn, Css, Ebb],
        solfege: ["re"],
      },
      {
        tone: 3,
        names: [Ds, Eb],
        solfege: ["ri", "me"],
      },
      {
        tone: 4,
        names: [En, Css, Fb],
        solfege: ["mi"],
      },
      {
        tone: 5,
        names: [Fn, Es, Gbb],
        solfege: ["fa"],
      },
      {
        tone: 6,
        names: [Fs, Ess, Gb],
        solfege: ["fi", "se"],
      },
      {
        tone: 7,
        names: [Gn, Fss, Abb],
        solfege: ["sol"],
      },
      {
        tone: 8,
        names: [Gs, Ab],
        solfege: ["si", "le"],
      },
      {
        tone: 9,
        names: [An, Gss, Bbb],
        solfege: ["la"],
      },
      {
        tone: 10,
        names: [As, Bb],
        solfege: ["le", "te"],
      },
      {
        tone: 11,
        names: [Bn, Ass, Cb],
        solfege: ["ti"],
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
      }
    return null
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

    // Finaly, compute the error
    const correct = this._freq[index].freq
    return { midi: index, error: freq - correct }
  }
}
