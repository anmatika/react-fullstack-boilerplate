const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const reactDOMserver = require('react-dom/server');
const redux = require('redux');
const reactRedux = require('react-redux');
const reactHotLoader = require('react-hot-loader');
const store = require('../client/store');

const renderToString = reactDOMserver.renderToString;
const createStore = redux.createStore;
const Provider = reactRedux.Provider;
const AppContainer = reactHotLoader.AppContainer;

const api = require('./api');
const webpackConfig = require('../client/dev.webpack.config.js');
const buildPath = path.resolve(__dirname, "..", "client", "build");
const generatedIndexHtmlPath = path.resolve(buildPath, 'index.html');
const devMiddlewareConfig = {
  stats: {
    colors: true,
    children: false,
    reasons: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false
  }
};

const compiler = webpack(webpackConfig);
const devMiddleware = webpackDevMiddleware(compiler, devMiddlewareConfig);
const app = express();


const handleRender = () => {
  const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';

  // return renderToString(
  //   <Provider store={store}>
  //     <AppContainer>
  //       <Main />
  //     </AppContainer>
  //   </Provider>
  // );
};
/*
const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="application-name" content="react-fullstack-boilerplate"/>
        <meta name="author" content="Jonas Jensen">
        <meta name="keywords" content="React,Node.js,fullstack,boilerplate">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1">
        <meta name="theme-color" content="#CCCCCC">
        <link rel="manifest" href="manifest.json">
        <title>React fullstack boilerplate</title>
    </head>
    <body>
        <div id="root">${renderToString(handleRender)}</div>
        <script src='bundle.js'></script>
    </body>
    </html>
`;*/


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/api', api);
app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) =>
  res.send(devMiddleware.fileSystem.readFileSync(generatedIndexHtmlPath)));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port :" + port));
