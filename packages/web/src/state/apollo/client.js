import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
// import { HttpLink } from "apollo-link-http"
import { onError } from "apollo-link-error"
import { ApolloLink } from "apollo-link"
// import fetch from "isomorphic-fetch"

import { resolvers, typeDefs, initialState } from "./graphql"

// The cache intelligently stores data from both internal client and external
// server sources.  All the local data values are initialized here.
const cache = new InMemoryCache()
cache.writeData({ data: initialState })

// The error link handles exceptions
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})
//
// // Throw error to alert developers of the problem
// if (!process.env.GATSBY_GQL_URI)
//   throw Error("Environment variable for gql uri is missing.")
// // The http link handles the datat traffic between client and graphql server
// const httpLink = new HttpLink({
//   uri: process.env.GATSBY_GQL_URI,
//   fetch,
// })

// This command consolidates all the links
// const link = ApolloLink.from([errorLink, httpLink])
const link = ApolloLink.from([errorLink])

// ... and this one builds the client
const apolloClient = new ApolloClient({
  link,
  cache,
  resolvers,
  typeDefs,
})

// In case the user logs out or something
apolloClient.onResetStore(() => cache.writeData({ data: initialState }))

export default apolloClient
