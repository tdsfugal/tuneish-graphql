"use client";

import { ApolloProvider } from "@apollo/client";
import { LazyMotion, domMax } from "framer-motion";

import { GlobalStyles } from "src/styles";
import { apolloClient } from "src/state/apollo";
import StyledComponentsRegistry from "src/state/styles-registry";

export default function LayoutClient({ children }) {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <StyledComponentsRegistry>
        <LazyMotion features={domMax}>{children}</LazyMotion>
      </StyledComponentsRegistry>
    </ApolloProvider>
  );
}
