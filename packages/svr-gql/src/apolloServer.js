import { ApolloServer } from "apollo-server-express"

import { SubscriptionsConnector } from "./connectors"
import { schema, resolvers } from "./graphql"

import { getLogger } from "./util"
const logger = getLogger(__filename)

const context = { subscriptions: new SubscriptionsConnector() }

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context,
})

export default apolloServer
