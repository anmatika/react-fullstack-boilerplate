const redux = require('redux');
const reduxPack = require('redux-pack');
const thunk = require('redux-thunk');
const rootReducer = require('../reducers');

const reduxMiddleware = redux.applyMiddleware(thunk.default, reduxPack.middleware);
const enhancer =
  process.env.NODE_ENV === 'development' ?
    redux.compose(reduxMiddleware, ...(window.devToolsExtension ? [window.devToolsExtension()] : [])) :
    reduxMiddleware;

module.exports = redux.createStore(rootReducer, enhancer);
