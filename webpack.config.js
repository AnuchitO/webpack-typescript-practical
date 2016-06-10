var path = require('path');

module.exports = {
  entry: [
    './src/index.ts'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module:{
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
