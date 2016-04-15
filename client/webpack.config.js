var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    '.client/src/app'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'client/app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client/src')
    }]
  }
};
