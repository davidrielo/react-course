const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  context: path.join(__dirname, '../client'),
  entry: [
    'webpack-dev-server/client?http://localhost:2424',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '../../static'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      include: [
        path.join(__dirname, '../client'),
        path.join(__dirname, '../../exercises')
      ],
      use: ['babel-loader']
    }, {
      test: /\.md$/,
      include: [
        path.join(__dirname, '../client'),
        path.join(__dirname, '../../exercises')
      ],
      use: [
        'html-loader',
        'remarkable-loader'
      ]
    }, {
      test: /\.(css|styl)$/,
      include: [
        path.join(__dirname, '../client'),
        path.join(__dirname, '../../exercises')
      ],
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'stylus-loader',
          options: {
            use: [require('bootstrap-styl')()]
          }
        }
      ]
    }, {
      test: /\.woff\d?(\?v=\d+\.\d+\.\d+)?$/,
      use: ['url-loader?limit=10000&mimetype=application/font-woff']
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: ['url-loader?limit=10000&mimetype=application/octet-stream']
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: ['file-loader']
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: ['url-loader?limit=10000&mimetype=image/svg+xml']
    }]
  }
};
