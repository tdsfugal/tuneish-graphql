export const typeDefs = /* GraphQL */ `
  type Query {
    hello: String
  }
`;

export const resolvers = {
  Query: {
    hello: () => "world",
  },
};
