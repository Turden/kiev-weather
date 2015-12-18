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
    plugins: [new HtmlWebpackPlugin()]
};