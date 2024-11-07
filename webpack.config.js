const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {

  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';

  return {

    mode: env.mode ?? 'development',
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"]
        },
      ],
    },
    entry: {
      main: path.resolve(__dirname, 'src', 'index.js'),
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
      isProd && new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    ].filter(Boolean),
    devtool: 'inline-source-map',
    devServer: {
      port: env.port ?? 3000,
      open: true
    }
  }
}

