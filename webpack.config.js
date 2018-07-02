const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const options = './.stylelintrc';

module.exports = {
	entry: ['babel-polyfill', './src/scripts/index.jsx'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	resolve: {
		extensions: ['.jsx', '.js'],
	},
	devServer: {
		inline: true,
		contentBase: path.resolve(__dirname, 'build'),
		historyApiFallback: true,
		port: 3000,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, '/tests/'],
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.scss/,
				loader: 'style-loader!css-loader!sass-loader',
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader',
				],
			},
		],
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new StyleLintPlugin(options),
	],
	devtool: 'cheap-module-eval-source-map',
};
