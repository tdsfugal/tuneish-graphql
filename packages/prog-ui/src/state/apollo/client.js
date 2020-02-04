import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

const API_URI = process.env.GATSBY_API_URI || "http://localhost:3000/api/v1"

const apolloClient = new ApolloClient({
  uri: API_URI,
  fetch,
})

export default apolloClient
