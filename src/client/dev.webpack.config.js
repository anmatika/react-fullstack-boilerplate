const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname);

module.exports = {
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        "webpack-dev-server/client?http://localhost:8080/",
        "webpack/hot/only-dev-server",
        path.join(srcDir, "Application", "index.js")
    ],
    output: {
        path: path.join(srcDir, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: srcDir,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(srcDir, "Application", 'index.html')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    performance: {
        hints: false
    }
};