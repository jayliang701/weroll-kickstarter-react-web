const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
const baseConfig = require('./webpack.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  mode: 'production',
  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    // minimizer: [
    //   // we specify a custom UglifyJsPlugin here to get source maps in production
    //   new UglifyJSPlugin({
    //     cache: true,
    //     parallel: true,
    //     uglifyOptions: {
    //       compress: false,
    //       ecma: 6,
    //       mangle: true
    //     },
    //     sourceMap: false
    //   })
    // ]
  },
  entry: {
    bundle: [ 
        path.resolve(__dirname, 'client/src/client.js') 
    ],
  },
  devtool: false,
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new CompressionPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};

module.exports = merge(baseConfig, config);
