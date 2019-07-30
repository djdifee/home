const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const babelConf = path.resolve(__dirname, 'babel.config.js');
const options = './.stylelintrc';

module.exports = {
	entry: ['@babel/polyfill', './src/scripts/index.jsx'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/scripts/components'),
			'@media': path.resolve(__dirname, 'src/media'),
			'@screens': path.resolve(__dirname, 'src/scripts/screens'),
			'@service': path.resolve(__dirname, 'src/scripts/service'),
			'@utils': path.resolve(__dirname, 'src/scripts/utils/'),
		},
		extensions: ['.jsx', '.js'],
	},
	devServer: {
		inline: true,
		contentBase: path.resolve(__dirname, 'build'),
		historyApiFallback: true,
		watchContentBase: true,
		port: 3000,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, '/tests/'],
				use: [
					{
						loader: 'babel-loader',
						options: {
							configFile: babelConf,
						},
					},
					'stylelint-custom-processor-loader',
				],
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
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					ecma: 6,
				},
			}),
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new StyleLintPlugin(options),
	],
	devtool: 'cheap-module-eval-source-map',
};

exports.aliases = {
	'@components': path.resolve(__dirname, 'src/scripts/components'),
	'@media': path.resolve(__dirname, 'src/media'),
	'@screens': path.resolve(__dirname, 'src/scripts/screens'),
	'@service': path.resolve(__dirname, 'src/scripts/service'),
	'@utils': path.resolve(__dirname, 'src/scripts/utils/'),
}
