//
// Credits to Dan Ford, https://dlford.io/gatsby-graphql-client-side-mutation/
//
import { subscriptionConnector } from "../connectors"

const resolvers = {
  Mutation: {
    signUp: async (parent, args) => {
      const result = await subscriptionConnector.addSubscriber(args)
      return { result }
    },
  },
}

export default resolvers
