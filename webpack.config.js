const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: "bundle.js"
  },
  plugins: [
    /* https://github.com/jantimon/html-webpack-plugin#options */
    new HtmlWebpackPlugin({
      title: 'A Simple Form render by React',
      filename: './index.html',
      template: './assets/index.tpl.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader"
      }
      ,{
        test: /\.html?$/,
        loader: "html-loader"
      }
    ]
  }
}
