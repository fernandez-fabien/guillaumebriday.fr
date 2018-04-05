/* eslint-disable no-useless-escape */

let path = require('path')

let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  entry: {
    app: [
      resolve('assets/javascripts/app.js'),
      resolve('assets/styles/app.sass')
    ]
  },
  output: {
    path: resolve('/'),
    publicPath: '/',
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {importLoaders: 2}},
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: ['./assets/javascripts'],
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  performance: {
    hints: false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new CopyWebpackPlugin([{
      from: 'node_modules/simple-jekyll-search/dest/simple-jekyll-search.min.js',
      to: 'js/simple-jekyll-search.min.js'
    }]),
    new HtmlWebpackPlugin({
      filename: '_includes/head.html',
      template: 'assets/head.html',
      inject: false
    })
  ]
}
