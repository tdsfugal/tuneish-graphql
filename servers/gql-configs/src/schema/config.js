export const typeDefs = `

  type ConfigItem {
    id: ID!
    label: String!
  }  

  input ConfigItemInput {
    id: ID!
    label: String!
  }

  type Config {
    id: ID!
    manifest: [ConfigItem]!
  }

  input ConfigInput {
    id: ID!
    manifest: [ConfigItemInput]!
  }

  type Query {
    configItem(id: ID!): ConfigItem
    config(id: ID!): Config
  }

  type Mutation {
    upsertConfig(input: ConfigInput! ): Config
  }
`;

export const resolvers = {
  Query: {
    configItem: (_, { id }) => {
      return { id, label: `foo-${id}` };
    },
    config: (_, { id }) => {
      return {
        id,
        manifest: [
          { id: "9909u71", label: "foo-9909u71" },
          { id: "99dsu72", label: "foo-99dsu72" },
          { id: "9929u73", label: "foo-9929u73" },
          { id: "9329u74", label: "foo-9329u74" },
          { id: "1229u75", label: "foo-1229u75" },
        ],
      };
    },
  },

  Mutation: {
    upsertConfig: (_, { input }) => {
      return input;
    },
  },
};
