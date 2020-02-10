import { gql } from "apollo-server-express"

import getLogger from "./getLogger"
const logger = getLogger(__filename)

const schema = gql`
  # Need at least one query to keep server from crashing
  type Query {
    dummy: String
  }

  type Mutation {
    signUp(firstName: String!, lastName: String!, email: String!): Response
  }

  type Response {
    result: String
  }
`

export default schema
