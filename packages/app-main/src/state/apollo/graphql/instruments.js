import gql from "graphql-tag"

export const instrumentInitialState = {
  fretboard: {
    fretless: false,
    left_handed: false,
    range_focus: {
      active: false,
      low: 2,
      high: 6,
      __typename: "RangeFocus",
    },
    __typename: "Fretboard",
  },
}

export const instrumentTypeDefs = gql`
  type RangeFocus {
    active: Boolean!
    low: Int!
    high: Int!
    __typename: RangeFocus
  }

  type Fretboard {
    fretless: Boolean!
    left_handed: Boolean!
    range_focus: RangeFocus!
    __typename: Fretboard
  }

  extend type Query {
    fretboard: Fretboard!
  }

  extend type Mutation {
    updateFretless: Boolean
    updateLeftHanded: Boolean
    updateRangeActive: Boolean
  }
`

export const instrumentResolvers = {
  Mutation: {
    updateFretless: (_, { fretless }, { cache }) => {
      cache.writeData({
        data: { fretboard: { fretless, __typename: "Fretboard" } },
      })
      return null
    },
    updateLeftHanded: (_, { left_handed }, { cache }) => {
      cache.writeData({
        data: { fretboard: { left_handed, __typename: "Fretboard" } },
      })
      return null
    },
    updateRangeActive: (_, { active }, { cache }) => {
      cache.writeData({
        data: {
          fretboard: {
            range_focus: { active, __typename: "RangeFocus" },
            __typename: "Fretboard",
          },
        },
      })
      return null
    },
  },
}
