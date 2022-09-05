import { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"

interface Data {
  files: string[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  fs.readdir("/", (error, files) => {
    if (error) {
      // @ts-expect-error
      res.status(400).json({ name: error.name })
      return
    }
    res.status(200).json({ files })
  })
}
