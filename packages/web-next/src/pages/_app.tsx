import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { GlobalStyles } from "../styles/global-styles";
import { apolloClient } from "../state/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
