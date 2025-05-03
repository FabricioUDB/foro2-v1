// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.web.js'),
  output: {
    path: path.resolve(__dirname, 'web-build'),
    filename: 'bundle.web.js',
  },
  resolve: {
    alias: { 'react-native$': 'react-native-web' },
    extensions: ['.web.js', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './web/index.html' }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'web'),
    hot: true,
    port: 8080,
  },
};






