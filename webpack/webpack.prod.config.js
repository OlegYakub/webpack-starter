//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin()
    ],
  },
  mode: 'production',
};
