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
        path.join(srcDir, "Application", "index.jsx")
    ],
    output: {
        path: path.join(srcDir, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                include: srcDir,
                enforce: 'pre',
                options: {
                    fix: true,
                }
            },
            {
                test: /\.jsx?$/,
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
    },
};