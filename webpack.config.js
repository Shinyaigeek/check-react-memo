const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(env, argv) {
  return {
    mode: "production",
    entry: {
      main: "./src/app.tsx",
    },
    output: {
      path: path.join(__dirname, "docs"),
      filename: chunkData => {
        return chunkData.chunk.name === "main"
          ? "[name].js"
          : "[name]/[name].js";
      }
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
      contentBase: path.join(__dirname, "docs"),
      port: 8080
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [

      new HtmlWebpackPlugin({
        chunks: ["main"],
        filename: "index.html",
        template: "src/index.html",
        inlineSource: ".(js|css)$"
      })
    ]
  };
};
