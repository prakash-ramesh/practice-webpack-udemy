const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
    courses: "./src/pages/courses.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [      
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/courses.html",
      chunks: ["courses"],
      filename: "courses.html",
      base: "pages",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images/*").replace(/\\/g, "/"),
          to: path.resolve(__dirname, "dist").replace(/\\/g, "/"),
          context: "src",
        },
      ],
    }),
    new webpack.ProvidePlugin({
      mnt: "moment"
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  }
};
