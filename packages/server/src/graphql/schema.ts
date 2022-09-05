import { makeExecutableSchema } from "@graphql-tools/schema"
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"

import { File } from "./file"

const typeDefs = mergeTypeDefs([File.typeDefs])
const resolvers = mergeResolvers([File.resolvers])

export const schema = makeExecutableSchema({ typeDefs, resolvers })
