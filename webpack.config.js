const path = require("path");
const { ProvidePlugin } = require("webpack");

module.exports = {
  entry: "./src/index",
  output: {
    filename: "index.js",
    library: "cosmic-ui",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "build"),
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
      },
    ],
  },
  externals: {
    react: "react",
    reactDOM: "react-dom",
    "@emotion/core": "@emotion/core",
    "@emotion/css": "@emotion/css",
  },
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [
    new ProvidePlugin({
      React: ["react", "default"],
      css: ["@emotion/css", "css"],
      cx: ["@emotion/css", "cx"],
    }),
  ],
};
