import gql from "graphql-tag"
import { Keys } from "../../../theory"

export const theoryInitialState = {
  current_key: Object.assign({}, Keys.randomKey(), {
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
    chromaticNames: [String]!
    circleNames: [String!]
    __typename: Key
  }

  interface Note {
    id: ID
    tone: Int!
    oct: Int
    idealFreq: FLoat
  }

  type SimpleNote implements Note {
    id: ID
    tone: Int!
    oct: Int
    idealFreq: Float
    __typename: SimpleNote
  }

  type NamedNote {
    id: ID
    name: String!
    tone: Int!
    oct: Int
    idealFreq: Float
    __typename: NamedNote
  }

  extend type Query {
    current_key: Key!
  }

  extend type Mutation {
    setKeyRoot(tone: Int!): Key!
    toggleKeyType: Key!
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
export const theoryResolvers = {
  Mutation: {
    setKeyRoot: (_, { tone }, { cache }) => {
      const {
        current_key: { name, type },
      } = cache.readQuery({ query: GET_CURRENT_KEY })
      const keys = Keys.getKeys({ tone, type })
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
  },
}
