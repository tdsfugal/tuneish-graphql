import React from "react"
import { ApolloProvider } from "react-apollo"
import { Provider } from "react-redux"

import apolloClient from "./apollo/client"
import reduxStore from "./redux/store"

export default ({ element }) => {
  // TODO - does this really need both Apollo and Redux???
  //        It would be better if the config informaiton on the
  //        page was persisted in the user's account for cookie-less
  //        services.  Make it so! Transfer the redux state to GraphQL.
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={reduxStore}>{element}</Provider>
    </ApolloProvider>
  )
}
