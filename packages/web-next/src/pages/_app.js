import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "/src/state/apollo";

export default function Tuneish({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
