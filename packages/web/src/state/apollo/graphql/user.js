import gql from "graphql-tag"

export const createGuestUser = () => {
  return {
    username: "",
    isConfirmed: false,
    email: "",
    nickname: "Guest",
  }
}

export const userInitialState = {
  user: Object.assign({}, createGuestUser(), {
    id: "user",
    __typename: "User",
  }),
}

export const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    isConfirmed: Boolean!
    email: String!
    nickname: String!
  }

  extend type Mutation {
    setUser(
      username: String!
      isConfirmed: Boolean!
      email: String!
      nickname: String!
    ): User
    confirmUser(isConfirmed: Boolean!): User
  }
`

const GET_USER = gql`
  query GetUser {
    user @client {
      username
      isConfirmed
      email
      nickname
    }
  }
`

export const userResolvers = {
  Mutation: {
    setUser: (_, { username, isConfirmed, email, nickname }, { cache }) => {
      const user = {
        id: "user",
        username,
        isConfirmed,
        email,
        nickname,
        __typename: "User",
      }
      cache.writeData({ data: { user } })
      return user
    },
    confirmUser: (_, { isConfirmed = false }, { cache }) => {
      const oldUser = cache.readQuery(GET_USER)
      const user = Object.assign({}, oldUser, { isConfirmed })
      cache.writeData({ data: { user } })
      return user
    },
  },
}
