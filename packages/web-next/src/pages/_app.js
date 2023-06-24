import { ApolloProvider } from "@apollo/client";

import { GlobalStyles } from "src/styles/global-styles";
import { apolloClient } from "/src/state/apollo";
import StyledCompoentsRegistry from "src/state/styles-registry.js";

export default function Tuneish({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <StyledCompoentsRegistry>
        <Component {...pageProps} />
      </StyledCompoentsRegistry>
    </ApolloProvider>
  );
}
