var path = require('path')
var glob = require('glob-all')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var PurifyCSSPlugin = require('purifycss-webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var inProduction = (process.env.NODE_ENV === 'production')

module.exports = {
  entry: {
    app: [
      './assets/javascripts/app.js',
      './assets/styles/app.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader', options: {importLoaders: 2}},
            'postcss-loader',
            'sass-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, './assets/javascripts')],
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
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/simple-jekyll-search/dest/simple-jekyll-search.min.js',
        to: 'js/simple-jekyll-search.min.js'
      }
    ]),
    new HtmlWebpackPlugin({
      filename: '_includes/head.html',
      template: 'assets/head.html',
      inject: false
    })
  ]
}

if (inProduction) {
  module.exports.devtool = false
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      compress: {
        warnings: false
      }
    }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync([
        path.join(__dirname, '**/*.html'),
        path.join(__dirname, '**/*.md')
      ]),
      minimize: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
