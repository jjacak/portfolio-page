const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './script/app.js',
  output: {
    path: path.resolve(__dirname, 'script'),
    filename: 'bundle.js'
  }
};

module.exports = config;