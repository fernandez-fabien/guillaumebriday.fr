/* eslint-disable no-useless-escape */

let merge = require('webpack-merge')
let webpack = require('webpack')
let PurgecssPlugin = require('purgecss-webpack-plugin')
let glob = require('glob-all')
let path = require('path')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let common = require('./webpack.common.js')

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(common, {
  devtool: false,
  plugins: [
    new PurgecssPlugin({
      // Specify the locations of any files you want to scan for class names.
      paths: glob.sync([
        resolve('**/*.html'),
        resolve('**/assets/javascripts/components/*.vue'),
        resolve('**/assets/javascripts/**/*.js')
      ]),
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html', 'js', 'vue']
        }
      ]
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new CleanWebpackPlugin([
      resolve('css'),
      resolve('js')
    ], { allowExternal: true })
  ]
})
