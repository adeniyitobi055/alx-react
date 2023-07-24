const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              severityError: 'warning', // (default)
              minimizerOptions: {
                plugins: [
                  ['imagemin-webp', { quality: 75 }],
                  ['imagemin-svgo', { removeViewBox: false }],
                  ['imagemin-gifsicle', { optimizationLevel: 5 }],
                  ['imagemin-mozjpeg', { quality: 75, progressive: true }],
                  ['imagemin-pngquant', { quality: [0.6, 0.8] }],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      lodash: 'lodash-es',
    },
  },
};

