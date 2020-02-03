//
// Credits to Dan Ford, https://dlford.io/gatsby-graphql-client-side-mutation/
//
import { gql } from "apollo-server-express"

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
