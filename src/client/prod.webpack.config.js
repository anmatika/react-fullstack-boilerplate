const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = __dirname;

const htmlWebpackConfig = {
    inject: true,
    template: path.resolve(srcDir, "Application", 'index.html'),
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDocType: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
    }
};

const uglifyJsPluginConfig = {
    compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
    },
    mangle: {
        screw_ie8: true
    },
    output: {
        comments: false,
        screw_ie8: true,
    },
    sourceMap: false,
};

module.exports = {
    devtool: false,
    bail: true,
    entry: path.join(srcDir, 'Application', 'index.jsx'),
    output: {
        path: path.join(srcDir, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: srcDir,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                include: srcDir,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(htmlWebpackConfig),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
        new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
        new webpack.optimize.UglifyJsPlugin(uglifyJsPluginConfig),
    ],
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty",
    },
};