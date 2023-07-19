import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { LazyMotion, domMax } from "framer-motion";

import { GlobalStyles } from "../styles";
import { apolloClient } from "../state/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <LazyMotion features={domMax}>
        <Component {...pageProps} />
      </LazyMotion>
    </ApolloProvider>
  );
}
