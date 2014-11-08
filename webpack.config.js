'use strict';
var webpack = require('webpack');

var IS_PRODUCTION = 'production' === process.env.NODE_ENV;

var webpackConfig = module.exports = {
  entry: __dirname + "/src/Graph.jsx",
  output: {
    path: __dirname + '/dist',
    filename: 'react-graph.js',
    library: 'Graph',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    d3: "d3" 
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'jsx-loader?harmony'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?includePaths[]=' +
          __dirname + '/src'
      }
    ]
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.es6']
  },
  plugins: []
};

if(IS_PRODUCTION){
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  );

  webpackConfig.output.filename = 'react-graph.min.js';
}
