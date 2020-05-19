import gql from "graphql-tag"

export const instrumentInitialState = {
  fretboard: {
    fretless: false,
    fiveString: false,
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
    fiveString: Boolean!
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
    updateRangeFocus: Boolean
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
    updateFiveString: (_, { fiveString }, { cache }) => {
      cache.writeData({
        data: { fretboard: { fiveString, __typename: "Fretboard" } },
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
    updateRangeFocus: (_, { low, high }, { cache }) => {
      cache.writeData({
        data: {
          fretboard: {
            range_focus: { low, high, __typename: "RangeFocus" },
            __typename: "Fretboard",
          },
        },
      })
      return null
    },
  },
}
