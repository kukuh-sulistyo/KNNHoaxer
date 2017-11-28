var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/javascripts/app.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 9000,
		inline: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['latest', 'stage-0']
					}
				}
			},
			{
				test: /\.csv$/,
				loader: 'csv-loader',
				options: {
					dynamicTyping: true,
					header: true,
					skipEmptyLines: true
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ 
			filename: 'index.html',
			template: 'src/index.html'
		})

	]
}