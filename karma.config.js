var extend = require('deep-extend');

var webpackKarmaConfig = extend(require("./webpack.config.js"), {
  entry: undefined,
  output: undefined,
  // devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?plugins=babel-plugin-rewire&compact=false&stage=0'
      }
    ]
  }
});

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ], //run in PhantomJS
    singleRun: false, //just run once by default
    frameworks: [ 'mocha', 'sinon', 'expect' ], //use the mocha test framework
    files: [
      'node_modules/babel-core/browser-polyfill.js',
      '**/__test__/*.test.js'
    ],
    preprocessors: {
      '**/__test__/*.test.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'mocha' ], //report results in this format
    webpack: webpackKarmaConfig,
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};