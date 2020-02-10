import { gql } from "apollo-server-express"

import { getLogger } from "../util"
const logger = getLogger(__filename)

const schema = gql`
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

export default schema
