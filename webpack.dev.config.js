const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.base.config')

const config = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
    overlay: true,
    hot: true,
  }
}

module.exports = webpackMerge(baseConfig, config)