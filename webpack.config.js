var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    target: "web",
    entry: [
        "./client/app/main.js",
    ],
    output: {
        path: "./server/output",
        filename: "app.js",
        publicPath: '/'
    },
    module: {
        preLoaders: [
           {
               test: /\.js$/, // include .js files
               exclude: /node_modules/, // exclude any and all files in the node_modules folder
               loader: "jshint-loader"
           }
        ],
      loaders: [{
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [ "babel?stage=0&optional=runtime&compact=true"],
      },{
        test: /\.json$/,
        loader: 'json-loader'
      }],
    },
    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        failOnHint: true,
        esnext: true,
        emitErrors: true,
    },
    plugins: [new HtmlWebpackPlugin()]
};