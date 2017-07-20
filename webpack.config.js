const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './app/main.ts'
  },
  target: 'web', //can be node or electron etc.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: '/'
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
      test: /.tsx?$/,
      loader: "ts-loader",
      exclude: /node-modules/
    }]
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".css", ".sass"]
  }
}