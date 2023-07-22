"use client";

import { ApolloProvider } from "@apollo/client";
import { LazyMotion, domMax } from "framer-motion";

import { GlobalStyles } from "../styles";
import { apolloClient } from "../state/apollo";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <LazyMotion features={domMax}>{children}</LazyMotion>
    </ApolloProvider>
  );
}
