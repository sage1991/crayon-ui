import axios from "axios"

import { Env, Time } from "../index"

export const client = axios.create({
  baseURL: Env.hostname,
  timeout: 10 * Time.SECOND
})
