import fs from "fs/promises"

export const resolvers = {
  Query: {
    async files(_: any, { path }: { path: string }) {
      const files = await fs.readdir(path, { withFileTypes: true })
      return files.map(async (file) => {
        const stat = await fs.stat(`${path}/${file.name}`)

        return {
          type: stat.isFile() ? "FILE" : "DIRECTORY",
          name: file.name,
          size: stat.size
        }
      })
    }
  }
}
