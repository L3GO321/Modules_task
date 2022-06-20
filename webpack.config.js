const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    entry: './index.js',
    plugins: [
        new HTMLWebpackPlugin()
    ]
}