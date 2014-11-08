'use strict';

module.exports = {
  entry: './example.jsx',
  output: {
    path: __dirname,
    filename: 'example.js',
  },
  externals:{
    react: "React"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  }
};

