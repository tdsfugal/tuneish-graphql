import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloCache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  cache: apolloCache,
});
