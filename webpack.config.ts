import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config: Configuration = {
  mode: "development",
  entry: './entry.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }) as any
  ]
}

export default config;
