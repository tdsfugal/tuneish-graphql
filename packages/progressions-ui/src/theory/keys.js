export const majorKeys = [
  {
    name: "Cb",
    type: "Major",
    acc: -7,
    notes: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
  },
  {
    name: "Gb",
    type: "Major",
    acc: -6,
    notes: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
  },
  {
    name: "Db",
    type: "Major",
    acc: -5,
    notes: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
  },
  {
    name: "Ab",
    type: "Major",
    acc: -4,
    notes: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
  },
  {
    name: "Eb",
    type: "Major",
    acc: -3,
    notes: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
  },
  {
    name: "Bb",
    type: "Major",
    acc: -2,
    notes: ["Bb", "C", "D", "Eb", "F", "G", "A"],
  },
  {
    name: "F",
    type: "Major",
    acc: -1,
    notes: ["F", "G", "A", "Bb", "C", "D", "E"],
  },
  {
    name: "C",
    type: "Major",
    acc: 0,
    notes: ["C", "D", "E", "F", "G", "A", "B"],
  },
  {
    name: "G",
    type: "Major",
    acc: +1,
    notes: ["G", "A", "B", "C", "D", "E", "F#"],
  },
  {
    name: "D",
    type: "Major",
    acc: +2,
    notes: ["D", "E", "F#", "G", "A", "B", "C#"],
  },
  {
    name: "A",
    type: "Major",
    acc: +3,
    notes: ["A", "B", "C#", "D", "E", "F#", "G#"],
  },
  {
    name: "E",
    type: "Major",
    acc: +4,
    notes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  },
  {
    name: "B",
    type: "Major",
    acc: +5,
    notes: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  },
  {
    name: "F#",
    type: "Major",
    acc: +6,
    notes: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
  },
  {
    name: "C#",
    type: "Major",
    acc: +7,
    notes: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
  },
]

export const minorKeys = [
  {
    name: "ab",
    type: "Minor",
    acc: -7,
    notes: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
  },
  {
    name: "eb",
    type: "Minor",
    acc: -6,
    notes: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
  },
  {
    name: "bb",
    type: "Minor",
    acc: -5,
    notes: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
  },
  {
    name: "f",
    type: "Minor",
    acc: -4,
    notes: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
  },
  {
    name: "c",
    type: "Minor",
    acc: -3,
    notes: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
  },
  {
    name: "g",
    type: "Minor",
    acc: -2,
    notes: ["G", "A", "Bb", "C", "D", "Eb", "F"],
  },
  {
    name: "d",
    type: "Minor",
    acc: -1,
    notes: ["D", "E", "F", "G", "A", "Bb", "C"],
  },
  {
    name: "a",
    type: "Minor",
    acc: 0,
    notes: ["A", "B", "C", "D", "E", "F", "G"],
  },
  {
    name: "e",
    type: "Minor",
    acc: +1,
    notes: ["E", "F#", "G", "A", "B", "C", "D"],
  },
  {
    name: "b",
    type: "Minor",
    acc: +2,
    notes: ["B", "C#", "D", "E", "F#", "G", "A"],
  },
  {
    name: "f#",
    type: "Minor",
    acc: +3,
    notes: ["F#", "G#", "A", "B", "C#", "D", "E"],
  },
  {
    name: "c#",
    type: "Minor",
    acc: +4,
    notes: ["C#", "D#", "E", "F#", "G#", "A", "B"],
  },
  {
    name: "g#",
    type: "Minor",
    acc: +5,
    notes: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
  },
  {
    name: "d#",
    type: "Minor",
    acc: +6,
    notes: ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
  },
  {
    name: "a#",
    type: "Minor",
    acc: +7,
    notes: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
  },
]

export const allKeys = majorKeys.concat(minorKeys)

export const randomMajorKey = () => {
  const rand = Math.floor(Math.random() * majorKeys.length)
  return majorKeys[rand]
}

export const randomMinorKey = () => {
  const rand = Math.floor(Math.random() * minorKeys.length)
  return minorKeys[rand]
}

export const randomKey = () => {
  const rand = Math.floor(Math.random() * allKeys.length)
  return allKeys[rand]
}
