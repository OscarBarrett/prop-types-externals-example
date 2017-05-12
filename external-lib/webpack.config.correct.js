const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'prop-types': 'prop-types',
    react: 'react'
  }
};