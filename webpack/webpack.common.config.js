const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,
  output: {
    filename: 'main.js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].[chunkhash].js',
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
          // {
          //   loader: 'eslint-loader',
          //   options: {
          //     fix: true
          //   }
          // }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({browsers: ['> 1%', 'IE >= 10']})],
            },
          },
          'sass-loader'
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],

};
