const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
        publicPath: 'dist/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }],
    },
    plugins: [
    ],
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new UglifyJSPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    );
} else {
    config.devtool = 'source-map';
    config.watch = true;
    config.watchOptions = {
        aggregateTimeout: 2000,
    };
}


module.exports = config;
