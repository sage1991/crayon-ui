import { GetServerSideProps, NextPage } from "next"

import { query } from "../common"

interface Props {
  files: any[]
}

const Home: NextPage<Props> = ({ files }) => {
  return (
    <div>
      {files.map((file, index) => (
        <p key={index}>
          {file.type} {file.name} {file.size}
        </p>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { files } = await query<{ files: string[] }>({
    query: "query FetchFiles($path: String!) { files(path: $path) { name type size } }",
    variables: {
      path: "/Users/harry/developer/source/file-server/../"
    }
  })

  return {
    props: {
      files
    }
  }
}

export default Home
