import gql from "graphql-tag"
import { randomKey } from "../../../theory/keys"

export const theoryInitialState = {
  current_key: Object.assign({}, randomKey(), {
    __typename: "Key",
  }),
}

export const theoryTypeDefs = gql`
  enum MajMin {
    MAJOR
    MINOR
  }

  type Key {
    name: String!
    type: MajMin!
    acc: Float!
    tones: [Int]!
    notes: [String]!
    __typename: Key
  }

  type Note {
    tone: Int
    names: [String]!
    solfege: [String]
    midis: [Int]
    __typename: Note
  }

  extend type Query {
    current_key: Key!
  }
`

export const theoryResolvers = {}
