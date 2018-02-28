const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/home/',
	},
	resolve: {
		extensions: ['.jsx', '.js']
	},
	devServer: {
		inline: true,
		contentBase: path.join(__dirname, 'build'),
		port: 3000
	},
	module: {
		rules : [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.scss/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({template: './src/index.html'})
	],
	devtool: 'cheap-module-eval-source-map',
};