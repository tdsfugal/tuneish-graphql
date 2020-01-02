import Notes from "./notes"
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

describe("Notes", () => {
  it("compiles", () => {
    const foo = new Notes()
    expect(foo).toBeInstanceOf(Notes)
  })

  it("returns note names by tone", () => {
    const foo = new Notes()
    const cases = [
      [0, [Cn, Bs, Dbb], ["do"]],
      [1, [Cs, Db], ["di", "ra"]],
      [2, [Dn, Css, Ebb], ["re"]],
      [3, [Ds, Eb], ["ri", "me"]],
      [4, [En, Css, Fb], ["mi"]],
      [5, [Fn, Es, Gbb], ["fa"]],
      [6, [Fs, Ess, Gb], ["fi", "se"]],
      [7, [Gn, Fss, Abb], ["sol"]],
      [8, [Gs, Ab], ["si", "le"]],
      [9, [An, Gss, Bbb], ["la"]],
      [10, [As, Bb], ["le", "te"]],
      [11, [Bn, Ass, Cb], ["ti"]],
    ]

    cases.map(x => {
      const [tone, names, solfege] = x
      const y = foo.getNoteByTone(tone)
      expect(y.tone).toEqual(tone)
      expect(y.names).toEqual(names)
      expect(y.solfege).toEqual(solfege)
    })
  })

  it("Gets notes by midi number", () => {
    const foo = new Notes()
    const c4 = foo.getNoteByMidi(60)
    expect(c4.oct).toBe(4)
    expect(c4.freq).toBeCloseTo(261.626, 3)
    expect(c4.names).toEqual([Cn, Bs, Dbb])
    expect(c4.solfege).toEqual(["do"])

    const a4 = foo.getNoteByMidi(69)
    expect(a4.tone).toBe(9)
    expect(a4.oct).toBe(4)
    expect(a4.freq).toBeCloseTo(440, 3)
    expect(a4.names).toEqual([An, Gss, Bbb])
    expect(a4.solfege).toEqual(["la"])
  })

  it("Finds the note nearest a frequency", () => {
    const foo = new Notes()
    const cases = [
      [16.352, 12],
      [415, 68],
      [427.47, 68],
      [427.52, 69],
      [440, 69],
      [12544, 127],
    ]
    cases.map(x => {
      const [freq, correctMidi] = x
      const correctFreq = foo.getNoteByMidi(correctMidi).freq
      const y = foo.getNearestMidi(freq)
      expect(y.midi).toEqual(correctMidi)
      expect(y.error).toBeCloseTo(freq - correctFreq, 5)
    })
  })
})
