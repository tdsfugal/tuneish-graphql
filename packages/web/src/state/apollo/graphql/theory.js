import gql from "graphql-tag"
import { Keys, NULL_CHORD } from "../../../theory"

export const theoryInitialState = {
  current_key: Object.assign({}, Keys.randomKey(), {
    __typename: "Key",
  }),
  current_chord: Object.assign({}, NULL_CHORD, { __typename: "FixedChord" }),
}

export const theoryTypeDefs = gql`
  enum MajMin {
    MAJOR
    MINOR
  }

  interface Note {
    id: ID
    pitch: Int!
    oct: Int
    idealFreq: FLoat
  }

  type SimpleNote implements Note {
    id: ID
    pitch: Int!
    oct: Int
    idealFreq: Float
    __typename: SimpleNote
  }

  type NamedNote {
    id: ID
    name: String!
    pitch: Int!
    oct: Int
    idealFreq: Float
    __typename: NamedNote
  }

  interface ChordBase {
    quality: String
    type: String
    intervals: [String]!
    semitones: [Int]!
    __typename: ChordBase
  }

  type Chord implements ChordBase {
    quality: String
    type: String
    intervals: [String]!
    semitones: [Int]!
    suffix: String
    __typename: Chord
  }

  type Tonic {
    root: String!
    pitch: Int!
  }

  type FixedChord implements ChordBase {
    root: String
    pitches: [Int]!
    quality: String
    type: String
    intervals: [String]!
    semitones: [Int]!
    suffix: String
    __typename: ChordPitches
  }

  type Key {
    name: String!
    type: MajMin!
    acc: Float!
    pitches: [Int]!
    chromaticNames: [String]!
    circleNames: [String!]
    __typename: Key
  }

  extend type Query {
    current_key: Key!
    current_chord: FixedChord!
  }

  extend type Mutation {
    setKeyRoot(pitch: Int!): Key!
    toggleKeyType: Key!
    changeChord(tonic: Tonic!, chord: FixedChord!): FixedChord
    clearChord: Boolean
  }
`

const GET_CURRENT_KEY = gql`
  query GetCurrentKey {
    current_key @client {
      name
      type
    }
  }
`

function computePitches(rootPitch, semitones) {
  return semitones.map(s => (rootPitch + s) % 12)
}

// TODO: Move chord over to a monadic stream.  This is slow to update when there
// are a lot of fretboard notes listening.

export const theoryResolvers = {
  Mutation: {
    setKeyRoot: (_, { pitch }, { cache }) => {
      const {
        current_key: { name, type },
      } = cache.readQuery({ query: GET_CURRENT_KEY })
      const keys = Keys.getKeys({ pitch, type })
      // Find out if the user is clicking on a different key, or one with
      // enharmonic alternatives. Eitehr way, find out if there is an other.
      let ind
      for (ind = 0; ind < keys.length && name === keys[ind].name; ind++) {}
      // If there is another key use it as the new current_key
      if (ind < keys.length) {
        const current_key = Object.assign({}, keys[ind], { __typename: "Key" })
        cache.writeData({ data: { current_key } })
      }
    },
    toggleKeyType: (_, __, { cache }) => {
      // This mutation toggles between the relative Mahor and minor for a
      // particular key, not the major and minor for a particular tonic.
      // For example, A minor is the relative minor for the key C Mahor.
      const {
        current_key: { name, type },
      } = cache.readQuery({ query: GET_CURRENT_KEY })
      const key = Keys.getRelativeKey({ name, type })
      if (key) {
        const current_key = Object.assign({}, key, { __typename: "Key" })
        cache.writeData({ data: { current_key } })
      }
    },
    changeChord: (_, { tonic, chord }, { cache }) => {
      const { root, pitch } = tonic
      const { semitones } = chord
      const pitches = computePitches(pitch, semitones)
      const data = {
        current_chord: Object.assign({}, chord, {
          root,
          pitches,
          __typename: "FixedChord",
        }),
      }
      cache.writeData({ data })
      return chord
    },
    clearChord: (_, __, { cache }) => {
      const data = {
        current_chord: Object.assign({}, NULL_CHORD, {
          __typename: "FixedChord",
        }),
      }
      cache.writeData({ data })
      return true
    },
  },
}
