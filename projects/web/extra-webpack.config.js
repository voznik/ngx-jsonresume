// https://www.npmjs.com/package/@angular-builders/custom-webpack#custom-webpack-config-function
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const pkg = require('../../package.json');

module.exports = (config, options) => {
  config.plugins.push(
    new Dotenv({
      defaults: true, // load .env.defaults
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    })
  );
  config.plugins.push(
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(pkg.version),
    })
  );

  return config;
};
