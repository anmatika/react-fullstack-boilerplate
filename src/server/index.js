const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const api = require('./api');
const webpackConfig = require('../client/dev.webpack.config.js');
const buildPath = path.resolve(__dirname, "..", "client", "build");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(api);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port :" + port));

const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, {hot: true});
server.listen(8080);

app.get('*', (req, res) => {
    const generatedIndexHtmlPath = path.resolve(buildPath, 'index.html');
    res.write(middleware.fileSystem.readFileSync(generatedIndexHtmlPath));
    res.end();
});