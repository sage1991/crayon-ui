import { AxiosRequestConfig } from "axios"

import { client } from "./client"

export const request = <T>(config: AxiosRequestConfig) => client.request<T>(config)
