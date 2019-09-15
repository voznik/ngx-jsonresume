// https://github.com/vikerman/v8-lazy/blob/master/webpack.server.config.js
// Work around for https://github.com/angular/angular-cli/issues/7200

const path = require('path');
const webpack = require('webpack');

const SRC_PATH = path.join(process.cwd(), 'projects/web/src');
const OUT_PATH = path.join(__dirname, '../../dist/web-server');
const ENTRY_PATH = path.join(process.cwd(), 'projects/server/src/server.ts');
// https://github.com/firebase/firebase-js-sdk/issues/1797
const regex = /^firebase(\/([\w\d]+))*/;

module.exports = {
  mode: 'none',
  entry: {
    // This is our Express server for Dynamic universal
    server: ENTRY_PATH,
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // https://github.com/firebase/firebase-js-sdk/issues/1455#issuecomment-455712500
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [
    /node_modules/,
    function(context, request, callback) {
      // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
      if (regex.test(request)) {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    },
  ],
  optimization: {
    minimize: false,
  },
  output: {
    // Puts the output at the root of the dist folder
    path: OUT_PATH,
    library: 'app',
    libraryTarget: 'umd',
    filename: '[name].js',
  },
  module: {
    noParse: /polyfills-.*\.js/,
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
        parser: { system: true },
      },
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, SRC_PATH), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, SRC_PATH),
      {}
    ),
  ],
};
