const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,
  output: {
    filename: 'main.js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder,
            },
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Images: commonPaths.publicImages,
      Styles: commonPaths.publicStyles
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      title: 'react-starter',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 2,
    }),
  ],
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
  },
};
