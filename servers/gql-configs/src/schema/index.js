import { createSchema } from "graphql-yoga";

import { typeDefs, resolvers } from "./config.js";

const schema = createSchema({ typeDefs, resolvers });

export default schema;
