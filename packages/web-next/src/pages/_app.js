import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "/src/state/apollo";
import { GlobalStyles } from "/src/styles";

export default function Tuneish({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
