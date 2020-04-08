import gql from "graphql-tag"

export const audioInitialState = {
  stable_note: {
    id: "stable",
    name: "",
    pitch: -1,
    oct: null,
    idealFreq: -1,
    __typename: "NamedNote",
  },
}

export const audioTypeDefs = gql`
  extend type Query {
    stable_note: NamedNote
  }

  extend type Mutation {
    updateStableNote(note: Note): NamedNote
  }
`

export const audioResolvers = {
  Mutation: {
    updateStableNote: (_, { note }, { cache }) => {
      const stable_note = Object.assign({}, note, {
        id: "stable",
        __typename: "NamedNote",
      })
      cache.writeData({ data: { stable_note } })
      return stable_note
    },
  },
}
