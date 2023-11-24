import { createSchema } from "graphql-yoga";

import { typeDefs, resolvers } from "./hello.js";

const schema = createSchema({ typeDefs, resolvers });

export default schema;
