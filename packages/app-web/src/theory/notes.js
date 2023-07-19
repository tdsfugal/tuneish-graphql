export const NULL_NOTE = {
  name: "",
  pitch: -1,
  oct: null,
  idealFreq: -1,
};

// This helper method computes an array of notes. The midi number for the note
// is it's index in the array.
const computeMidiNotes = () => {
  const A4 = 440; // Reference pitch, hz
  const semiTone = Math.pow(2, 1 / 12); // Even tempered

  const Cn4 = A4 * Math.pow(semiTone, -9);
  const Cs4 = A4 * Math.pow(semiTone, -8);
  const Dn4 = A4 * Math.pow(semiTone, -7);
  const Ds4 = A4 * Math.pow(semiTone, -6);
  const En4 = A4 * Math.pow(semiTone, -5);
  const Fn4 = A4 * Math.pow(semiTone, -4);
  const Fs4 = A4 * Math.pow(semiTone, -3);
  const Gn4 = A4 * Math.pow(semiTone, -2);
  const Gs4 = A4 * Math.pow(semiTone, -1);
  const An4 = A4;
  const As4 = A4 * Math.pow(semiTone, +1);
  const Bn4 = A4 * Math.pow(semiTone, +2);

  const fours = [Cn4, Cs4, Dn4, Ds4, En4, Fn4, Fs4, Gn4, Gs4, An4, As4, Bn4];

  const midiNotes = [];
  let oct_mult = 1 / 32;

  let oct, pitch;
  const upRatio = Math.pow(semiTone, 0.5);
  for (oct = -1; oct < 11; oct++) {
    for (pitch = 0; pitch < 12; pitch++) {
      const f = fours[pitch] * oct_mult;
      midiNotes.push({
        oct: oct,
        pitch: pitch,
        idealFreq: f,
        _upper: f * upRatio,
      });
    }
    oct_mult = oct_mult * 2;
  }
  return midiNotes;
};

// The notes object is intended to be a somewhat theoretical index. Embelishments to
// notes - for example the name used to describe the note  - are sourced by
// other classes or objects.
export class Notes {
  constructor() {
    this._midisByPitch = {
      0: [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120],
      1: [1, 13, 25, 37, 49, 61, 73, 85, 97, 109, 121],
      2: [2, 14, 26, 38, 50, 62, 74, 86, 98, 110, 122],
      3: [3, 15, 27, 39, 51, 63, 75, 87, 99, 111, 123],
      4: [4, 16, 28, 40, 52, 64, 76, 88, 100, 112, 124],
      5: [5, 17, 29, 41, 53, 65, 77, 89, 101, 113, 125],
      6: [6, 18, 30, 42, 54, 66, 78, 90, 102, 114, 126],
      7: [7, 19, 31, 43, 55, 67, 79, 91, 103, 115, 127],
      8: [8, 20, 32, 44, 56, 68, 80, 92, 104, 116],
      9: [9, 21, 33, 45, 57, 69, 81, 93, 105, 117],
      10: [10, 22, 34, 46, 58, 70, 82, 94, 106, 118],
      11: [11, 23, 35, 47, 59, 71, 83, 95, 107, 119],
    };
    this._notes = computeMidiNotes();

    this.getMidi = ({ pitch, oct }) => {
      const midis = this._midisByPitch[pitch];
      return midis ? midis[oct] : null;
    };

    this.getNoteByMidi = (midiNumber) => {
      if (midiNumber < 0 || midiNumber > this._notes.length) {
        return NULL_NOTE;
      } else {
        const note = this._notes[midiNumber];
        return {
          pitch: note.pitch,
          oct: note.oct,
          idealFreq: note.idealFreq,
        };
      }
    };

    this.getNearestNoteWithCent = (obsFreq) => {
      // Find the index i where:
      //     freq <= freq[i].upper && freq > freq[i-1].upper
      //
      // then return the midi index i and the deviation from freq[i].freq
      //
      // Step 1) Conduct a binary search of the MidiNotes to
      // get close.  Often this will be the correct value.
      //
      let range = 144;
      let midpoint = range / 2;
      let delta = obsFreq - this._notes[midpoint].idealFreq;
      let newMid, newDelt;
      while (range > 3) {
        newMid = Math.floor(
          delta >= 0 ? midpoint + range / 4 : midpoint - range / 4
        );
        newDelt = obsFreq - this._notes[newMid].idealFreq;
        range = range / 2;
        if (Math.abs(newDelt) < Math.abs(delta)) {
          delta = newDelt;
          midpoint = newMid;
        }
      }
      // Step 2 is to adjust the result using the exact .upper values
      let index = midpoint;
      const upper = this._notes[midpoint]._upper;
      const lower = midpoint > 0 ? this._notes[midpoint - 1]._upper : 0;
      if (obsFreq > upper) index += 1;
      if (obsFreq < lower) index -= 1;

      // Finaly, compute the cent error
      const idealFreq = this._notes[index].idealFreq;
      const cent = 1200 * Math.log2(obsFreq / idealFreq);

      // Note that the index is also the midi number for the note
      return Object.assign({}, this.getNoteByMidi(index), { cent, obsFreq });
    };
  }
}

// const solfegev = [
//   {
//     pitch: 0, // number of half steps up from C
//     solfege: ["do"],
//   },
//   {
//     pitch: 1,
//     solfege: ["di", "ra"],
//   },
//   {
//     pitch: 2,
//     solfege: ["re"],
//   },
//   {
//     pitch: 3,
//     solfege: ["ri", "me"],
//   },
//   {
//     pitch: 4,
//     solfege: ["mi"],
//   },
//   {
//     pitch: 5,
//     solfege: ["fa"],
//   },
//   {
//     pitch: 6,
//     solfege: ["fi", "se"],
//   },
//   {
//     pitch: 7,
//     solfege: ["sol"],
//   },
//   {
//     pitch: 8,
//     solfege: ["si", "le"],
//   },
//   {
//     pitch: 9,
//     solfege: ["la"],
//   },
//   {
//     pitch: 10,
//     solfege: ["le", "te"],
//   },
//   {
//     pitch: 11,
//     solfege: ["ti"],
//   },
// ]
