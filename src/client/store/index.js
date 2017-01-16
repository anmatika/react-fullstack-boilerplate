import { createStore, applyMiddleware, compose } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const reduxMiddleware = applyMiddleware(thunk, reduxPackMiddleware);

const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';

const enhancer =
  isDevelopmentEnvironment ?
    compose(reduxMiddleware, ...(window.devToolsExtension ? [window.devToolsExtension()] : [])) :
    reduxMiddleware;

const store = createStore(rootReducer, enhancer);

export default store;
