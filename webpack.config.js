const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'squire.js',
    library: 'squire',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this'
  }
};