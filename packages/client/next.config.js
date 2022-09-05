const path = require("path")
const dotenv = require("dotenv")

const REPOSITORY_ROOT = path.resolve(__dirname, "../../")
dotenv.config({ path: path.resolve(REPOSITORY_ROOT, `env/.env.${process.env.PROFILE}`) })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    })
    return config
  }
}

module.exports = nextConfig
