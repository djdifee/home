const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		filename: 'js/[name].js',
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
		rules : [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
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
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	],
	devtool: 'cheap-module-eval-source-map',
};