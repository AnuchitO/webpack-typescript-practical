var path = require('path');
var webpack = require('webpack')

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
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
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
