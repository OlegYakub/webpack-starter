const commonPaths = require('./paths');

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    historyApiFallback: true,
  },
};

