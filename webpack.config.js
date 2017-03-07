var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {app:'./src/Main.js',theme:'./src/Theme.js'},

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[id].[hash].bundle.js',
	path: 'build',
    publicPath: '/react-site/build/'
  },
	plugins: [
		/*
        // This plugin minifies all the Javascript code of the final bundle
        new webpack.optimize.UglifyJsPlugin({
            mangle:   true,
            compress: {
                warnings: false, // Suppress uglification warnings
            },
        }),
		*/
        new webpack.optimize.CommonsChunkPlugin({
            name:      'main', // Move dependencies to our main file
            children:  true, // Look for common dependencies in all children,
            minChunks: 2, // How many times a dependency must come up before being extracted
        })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ]},
      { test: /\.(jpg|gif|png|eot|woff|svg|ttf)(\?.*)?$/, loader: "file-loader" }
    ]
  }
}
