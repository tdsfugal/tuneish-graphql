import gql from "graphql-tag"

export const audioInitialState = {
  // These values are the note that is ringing out. Slowly varying.
  stable_note: {
    note: null,
    __typename: "StableNote",
  },
  // These values vary at near animationframerate speed
  fast_note: {
    freq: 0,
    note: null,
    cent: 0.0,
    __typename: "FastNote",
  },
}

export const audioTypeDefs = gql`
  type StableNote {
    note: Note
    __typename: StableNote
  }

  type FastNote {
    freq: Float
    note: Note
    cent: Float
    __typename: FastNote
  }

  extend type Query {
    stable_note: Note
    fast_note: Note
  }
`

export const audioResolvers = {
  Mutation: {
    updateFast: (_, { freq, note, cent }) => null,
    updateStable: (_, { note }) => null,
  },
}
