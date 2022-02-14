const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "dynamicdevs",
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
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "react",
  },
};
