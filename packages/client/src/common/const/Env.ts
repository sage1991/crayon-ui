import { isServer } from "../utils"

export namespace Env {
  export const hostname = isServer()
    ? "http://localhost:3000/api"
    : `${process.env.NEXT_PUBLIC_HOST_NAME}`
}
