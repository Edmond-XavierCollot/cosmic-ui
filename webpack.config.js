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
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
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
      React: "react",
      css: ["@emotion/css", "css"],
      cx: ["@emotion/css", "cx"],
    }),
  ],
};
