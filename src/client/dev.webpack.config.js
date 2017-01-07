const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = __dirname;
const templateHtmlPath = path.resolve(srcDir, "Application", 'index.html');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'react-hot-loader/patch',
        "webpack/hot/only-dev-server",
        path.join(srcDir, "Application", "index.js")
    ],
    output: {
        path: path.join(srcDir, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                include: srcDir,
                enforce: 'pre',
                options: {
                    fix: true,
                }
            },
            {
                test: /\.js$/,
                include: srcDir,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.scss$/,
                include: srcDir,
                loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({inject: true, template: templateHtmlPath}),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    performance: {
        hints: false
    }
};