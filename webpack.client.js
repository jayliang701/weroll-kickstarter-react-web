const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const hotModuleScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000';

const config = {
  mode: 'development',
  // Tell webpack to root file of our server app
  entry: {
    bundle: [ 
        hotModuleScript, 
        path.resolve(__dirname, 'client/src/client.js') 
    ],
  },

  // Tell webpack where to put output file
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'client/dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = merge(baseConfig, config);
