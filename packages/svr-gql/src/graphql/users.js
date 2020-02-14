import { gql } from "apollo-server-express"

import { getLogger } from "../util"
const logger = getLogger(__filename)

export const usersResolvers = {
  Mutation: {
    subscribe: async (_, { firstName, lastName, email }, { subscriptions }) => {
      const subscription = await subscriptions.subscribe({
        firstName,
        lastName,
        email,
      })
      return subscription
    },
  },
}

export const usersSchema = gql`
  type Subscription {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    dummy: String
  }

  type Mutation {
    subscribe(
      firstName: String!
      lastName: String!
      email: String!
    ): Subscription

    unsubscribe(email: String!): Subscription
  }
`
