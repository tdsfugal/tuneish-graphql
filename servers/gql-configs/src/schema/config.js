export const typeDefs = `

  type ConfigItem {
    id: ID!
    label: String
  }  

  input ConfigItemInput {
    label: String!
  }

  type Config {
    id: ID!
    manifest: [ConfigItem]!
  }

  input ConfigInput {
    manifest: [ID]!
  }

  type Query {
    configItem(id: ID!): ConfigItem
    config(id: ID!): Config
  }

  type Mutation {
    upsertConfigItem(id: ID!, input: ConfigItemInput! ): ConfigItem
    upsertConfig(id: ID!, input: ConfigInput! ): Config
  }
`;

export const resolvers = {
  Query: {
    configItem: (_, { id }, { config }) => config.getConfigItem(id),
    config: (_, { id }, { config }) => config.getConfig(id),
  },

  Mutation: {
    upsertConfig: (_, { id, input }, { config }) =>
      config.upsertConfig(id, input),
    upsertConfigItem: (_, { id, input }, { config }) =>
      config.upsertConfigItem(id, input),
  },
};
