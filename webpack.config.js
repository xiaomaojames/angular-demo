const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template:"./index.html"
        })
    ],
    output: {
        filename: 'bundle.js',
        // path: path.resolve(__dirname, 'dist'),

    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '.'
    },
};