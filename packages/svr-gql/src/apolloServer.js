import { ApolloServer } from "apollo-server-express"

import { schema, resolvers } from "./graphql"

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

export default apolloServer
