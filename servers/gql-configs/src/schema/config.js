export const typeDefs = `

  type ConfigItem {
    id: ID!
    label: String
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
    configItem: (_, { id }, { config }) => config.getConfigItem(id),
    config: (_, { id }, { config }) => config.getConfig(id),
  },

  Mutation: {
    upsertConfig: (_, { input }, { config }) => config.upsertConfig(input),
  },
};
