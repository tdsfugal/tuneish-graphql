import { audioTypeDefs, audioResolvers, audioInitialState } from "./audio"
import {
  instrumentTypeDefs,
  instrumentResolvers,
  instrumentInitialState,
} from "./instruments"
import { theoryTypeDefs, theoryResolvers, theoryInitialState } from "./theory"
import { userTypeDefs, userResolvers, userInitialState } from "./user"

export const typeDefs = [
  audioTypeDefs,
  instrumentTypeDefs,
  theoryTypeDefs,
  userTypeDefs,
]

const query = Object.assign(
  {},
  audioResolvers.Query,
  instrumentResolvers.Query,
  theoryResolvers.Query,
  userResolvers.Query
)

const mutation = Object.assign(
  {},
  audioResolvers.Mutation,
  instrumentResolvers.Mutation,
  theoryResolvers.Mutation,
  userResolvers.Mutation
)

export const resolvers = Object.assign(
  {},
  audioResolvers,
  instrumentResolvers,
  theoryResolvers,
  userResolvers,
  { Query: query, Mutation: mutation }
)

export const initialState = Object.assign(
  {},
  audioInitialState,
  instrumentInitialState,
  theoryInitialState,
  userInitialState
)
