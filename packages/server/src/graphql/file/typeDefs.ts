import { gql } from "apollo-server"

export const typeDefs = gql`
  type Query {
    files(path: String!): [File!]!
  }

  type File {
    type: String!
    name: String!
    size: Float!
  }
`
