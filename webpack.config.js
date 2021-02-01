const path = require("path");

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
};
