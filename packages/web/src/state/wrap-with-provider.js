import React from "react"
import { ApolloProvider } from "react-apollo"

import apolloClient from "./apollo/client"

export default ({ element }) => (
  <ApolloProvider client={apolloClient}>{element}</ApolloProvider>
)
