import { ApolloProvider } from "@apollo/client";

import apolloClient from "/src/state/apollo-client";

export default function Tuneish({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
