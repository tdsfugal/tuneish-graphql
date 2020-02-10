import { ApolloServer } from "apollo-server-express"

import { schema, resolvers } from "./graphql"

import getLogger from "./getLogger"
const logger = getLogger(__filename)

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

export default apolloServer
