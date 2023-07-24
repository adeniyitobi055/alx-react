const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
	use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
	type: 'asset/resource',
	generator: {
	  filename: 'assets/[name][ext]',
	},
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['imagemin-webp', { quality: 75 }],
          ['imagemin-svgo', { removeViewBox: false }],
          ['imagemin-gifsicle', { optimizationLevel: 5 }],
          ['imagemin-mozjpeg', { quality: 75, progressive: true }],
          ['imagemin-pngquant', { quality: [0.6, 0.8] }],
	],
      },
    }),
  ],
};
