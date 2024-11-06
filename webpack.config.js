const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
  return {

    mode: env.mode ?? 'development',
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
      ],
    },
    entry: {
      bundle: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'template.html')
      }),
    ],
    devtool: 'inline-source-map',
    devServer: {
      port: env.port ?? 3000,
      open: true
    }
  }
}

