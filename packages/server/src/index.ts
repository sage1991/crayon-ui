import { ApolloServer } from "apollo-server"

import { schema } from "./graphql"

const main = async () => {
  const server = new ApolloServer({ schema })
  const { port, url } = await server.listen()
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at ${url}
  `)
}

main()
