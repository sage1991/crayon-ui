import { request } from "./request"

interface QueryResult<T> {
  data: T
}

interface QueryData<V = any> {
  query: string
  variables: V
}

export const query = async <T, V = any>(data: QueryData<V>) => {
  const response = await request<QueryResult<T>>({
    url: "/graphql",
    method: "POST",
    data
  })
  return response.data.data
}
