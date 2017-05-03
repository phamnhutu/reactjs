var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.dev.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module : {
    loaders : [
      {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel',
            query: {
                cacheDirectory: true,
                presets: ["es2016", "stage-0", "react"],
                plugins: ['transform-decorators-legacy' ]            
          }
      },
       { 
            test: /\.css$/, // Only .css files
            include : APP_DIR,
            loader: 'style!css' // Run both loaders
       },
       { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
};

module.exports = config;
