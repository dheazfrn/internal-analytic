const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackMessages = require('webpack-messages')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { plugins: ['transform-vue-jsx'] }
        }]
      },
      {
        test: /\.(vue)$/,
        exclude: /node_modules/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue Patterns'
    }),
    new VueLoaderPlugin(),
    new WebpackMessages({
      name: 'client',
      logger: str => console.log(`>> ${str}`)
    })
  ],
}