import { audioTypeDefs, audioResolvers, audioInitialState } from "./audio"
import {
  instrumentTypeDefs,
  instrumentResolvers,
  instrumentInitialState,
} from "./instruments"
import { theoryTypeDefs, theoryResolvers, theoryInitialState } from "./theory"

export const typeDefs = [audioTypeDefs, instrumentTypeDefs, theoryTypeDefs]

const query = Object.assign(
  {},
  audioResolvers.Query,
  instrumentResolvers.Query,
  theoryResolvers.Query
)

const mutation = Object.assign(
  {},
  audioResolvers.Mutation,
  instrumentResolvers.Mutation,
  theoryResolvers.Mutation
)

export const resolvers = Object.assign(
  {},
  audioResolvers,
  instrumentResolvers,
  theoryResolvers,
  { Query: query, Mutation: mutation }
)

export const initialState = Object.assign(
  {},
  audioInitialState,
  instrumentInitialState,
  theoryInitialState
)
