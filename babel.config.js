module.exports = function buildConfig(api) {
  const isUseEsModule = api.env("esm")
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          debug: true,
          modules: isUseEsModule ? false : "commonjs"
        }
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
          importSource: "@emotion/react"
        }
      ],
      "@babel/preset-typescript"
    ],
    plugins: ["@emotion"]
  }
}
