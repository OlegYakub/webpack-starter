const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.config');

const envs = {
  development: 'dev',
  production: 'prod',
};

const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./webpack.${env}.config.js`);
console.log('env ------->', envConfig);

module.exports = webpackMerge(common, envConfig);
