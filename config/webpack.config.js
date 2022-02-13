const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  externals: {
    react: "react",
  },
};
