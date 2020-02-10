import { getLogger } from "../util"
const logger = getLogger(__filename)

const resolvers = {
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

export default resolvers
