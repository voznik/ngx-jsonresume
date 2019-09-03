// https://www.npmjs.com/package/@angular-builders/custom-webpack#custom-webpack-config-function
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const pkg = require('../../package.json');

module.exports = (config, options) => {
  config.plugins.push(
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
    })
  );
  config.plugins.push(
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(pkg.version)
    })
  );

  return config;
};
