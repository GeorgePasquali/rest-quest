const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {

    app: './app/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "app.js"
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'Development'
      })
    ],
  module: {
    loaders: [{
      test: /.tsx$/,
      loader: "ts-loader",
      exclude: /node-modules/
    }]
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".css", ".sass"]
  }
}