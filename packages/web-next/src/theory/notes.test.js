import Notes from "./notes";
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
} from "./note-names";

// TODO - these tests are terribly out of date. Fix.

describe("Notes", () => {
  it("compiles", () => {
    const foo = new Notes();
    expect(foo).toBeInstanceOf(Notes);
  });

  it("returns note names by pitch", () => {
    const foo = new Notes();
    const cases = [
      [0, [Cn, Bs, Dbb], ["do"]],
      [1, [Cs, Db], ["di", "ra"]],
      [2, [Dn, Css, Ebb], ["re"]],
      [3, [Ds, Eb], ["ri", "me"]],
      [4, [En, Dss, Fb], ["mi"]],
      [5, [Fn, Es, Gbb], ["fa"]],
      [6, [Fs, Ess, Gb], ["fi", "se"]],
      [7, [Gn, Fss, Abb], ["sol"]],
      [8, [Gs, Ab], ["si", "le"]],
      [9, [An, Gss, Bbb], ["la"]],
      [10, [As, Bb], ["le", "te"]],
      [11, [Bn, Ass, Cb], ["ti"]],
    ];

    cases.map((x) => {
      const [pitch, names, solfege] = x;
      const y = foo.getNoteByPitch(pitch);
      expect(y.pitch).toEqual(pitch);
      expect(y.names).toEqual(names);
      expect(y.solfege).toEqual(solfege);
    });
  });

  it("returns an octave-indexed array of midis by name", () => {
    const foo = new Notes();
    const cases = [
      [Cn, [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120]],
      [Bs, [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120]],
      [Dbb, [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120]],
      [Cs, [1, 13, 25, 37, 49, 61, 73, 85, 97, 109, 121]],
      [Db, [1, 13, 25, 37, 49, 61, 73, 85, 97, 109, 121]],
      [Dn, [2, 14, 26, 38, 50, 62, 74, 86, 98, 110, 122]],
      [Css, [2, 14, 26, 38, 50, 62, 74, 86, 98, 110, 122]],
      [Ebb, [2, 14, 26, 38, 50, 62, 74, 86, 98, 110, 122]],
      [Ds, [3, 15, 27, 39, 51, 63, 75, 87, 99, 111, 123]],
      [Eb, [3, 15, 27, 39, 51, 63, 75, 87, 99, 111, 123]],
      [En, [4, 16, 28, 40, 52, 64, 76, 88, 100, 112, 124]],
      [Dss, [4, 16, 28, 40, 52, 64, 76, 88, 100, 112, 124]],
      [Fb, [4, 16, 28, 40, 52, 64, 76, 88, 100, 112, 124]],
      [Fn, [5, 17, 29, 41, 53, 65, 77, 89, 101, 113, 125]],
      [Es, [5, 17, 29, 41, 53, 65, 77, 89, 101, 113, 125]],
      [Gbb, [5, 17, 29, 41, 53, 65, 77, 89, 101, 113, 125]],
      [Fs, [6, 18, 30, 42, 54, 66, 78, 90, 102, 114, 126]],
      [Ess, [6, 18, 30, 42, 54, 66, 78, 90, 102, 114, 126]],
      [Gb, [6, 18, 30, 42, 54, 66, 78, 90, 102, 114, 126]],
      [Gn, [7, 19, 31, 43, 55, 67, 79, 91, 103, 115, 127]],
      [Fss, [7, 19, 31, 43, 55, 67, 79, 91, 103, 115, 127]],
      [Abb, [7, 19, 31, 43, 55, 67, 79, 91, 103, 115, 127]],
      [Gs, [8, 20, 32, 44, 56, 68, 80, 92, 104, 116]],
      [Ab, [8, 20, 32, 44, 56, 68, 80, 92, 104, 116]],
      [An, [9, 21, 33, 45, 57, 69, 81, 93, 105, 117]],
      [Gss, [9, 21, 33, 45, 57, 69, 81, 93, 105, 117]],
      [Bbb, [9, 21, 33, 45, 57, 69, 81, 93, 105, 117]],
      [As, [10, 22, 34, 46, 58, 70, 82, 94, 106, 118]],
      [Bb, [10, 22, 34, 46, 58, 70, 82, 94, 106, 118]],
      [Bn, [11, 23, 35, 47, 59, 71, 83, 95, 107, 119]],
      [Ass, [11, 23, 35, 47, 59, 71, 83, 95, 107, 119]],
      [Cb, [11, 23, 35, 47, 59, 71, 83, 95, 107, 119]],
    ];
    cases.map((x) => {
      const [name, midis] = x;
      expect(foo.getMidisByName(name)).toEqual(midis);
    });
  });

  it("Gets notes by midi number", () => {
    const foo = new Notes();
    const c4 = foo.getNoteByMidi(60);
    expect(c4.oct).toBe(4);
    expect(c4.freq).toBeCloseTo(261.626, 3);
    expect(c4.names).toEqual([Cn, Bs, Dbb]);
    expect(c4.solfege).toEqual(["do"]);

    const a4 = foo.getNoteByMidi(69);
    expect(a4.pitch).toBe(9);
    expect(a4.oct).toBe(4);
    expect(a4.freq).toBeCloseTo(440, 3);
    expect(a4.names).toEqual([An, Gss, Bbb]);
    expect(a4.solfege).toEqual(["la"]);
  });

  it("Finds the note nearest a frequency", () => {
    const foo = new Notes();
    const cases = [
      [16.352, 12],
      [415, 68],
      [427.47, 68],
      [427.52, 69],
      [440, 69],
      [12544, 127],
    ];
    cases.map((x) => {
      const [freq, correctMidi] = x;
      const correctFreq = foo.getNoteByMidi(correctMidi).freq;
      const y = foo.getNearestMidi(freq);
      expect(y.midi).toEqual(correctMidi);
      const cent = 1200 * Math.log2(freq / correctFreq);
      expect(y.cent).toBeCloseTo(cent, 5);
    });
  });
});
