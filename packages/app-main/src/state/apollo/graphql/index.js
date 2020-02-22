import { audioTypeDefs, audioResolvers, audioInitialState } from "./audio"
import {
  instrumentTypeDefs,
  instrumentResolvers,
  instrumentInitialState,
} from "./instruments"
import { theoryTypeDefs, theoryResolvers, theoryInitialState } from "./theory"

export const typeDefs = [audioTypeDefs, instrumentTypeDefs, theoryTypeDefs]
export const resolvers = Object.assign(
  {},
  audioResolvers,
  instrumentResolvers,
  theoryResolvers
)
export const initialState = Object.assign(
  {},
  audioInitialState,
  instrumentInitialState,
  theoryInitialState
)
