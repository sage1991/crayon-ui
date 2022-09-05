import { ApolloServer } from "apollo-server-micro"
import { MicroRequest } from "apollo-server-micro/dist/types"
import { ServerResponse } from "http"
import { NextApiHandler } from "next"

import { schema } from "../../graphql"

export const config = {
  api: {
    bodyParser: false
  }
}

const server = new ApolloServer({ schema })
const startSignal = server.start()
let graphQLHandler: (req: MicroRequest, res: ServerResponse) => Promise<void>

const handler: NextApiHandler = async (req, res) => {
  if (!graphQLHandler) {
    await startSignal
    graphQLHandler = server.createHandler({ path: "/api/graphql" })
  }
  res.setHeader("Access-Control-Allow-Origin", "*")
  return graphQLHandler(req, res)
}

export default handler
