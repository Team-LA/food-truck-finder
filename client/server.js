var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('combined'));

var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

var path = require('path');
app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build/css/bootstrap.min.css'));
});


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
