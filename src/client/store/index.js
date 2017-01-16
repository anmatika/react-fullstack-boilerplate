import { createStore, applyMiddleware, compose } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const reduxMiddleware = applyMiddleware(thunk, reduxPackMiddleware);
const enhancer =
  process.env.NODE_ENV === 'development' ?
    compose(reduxMiddleware, ...(window.devToolsExtension ?
      [window.devToolsExtension()] : [])) :
      reduxMiddleware;

export default createStore(rootReducer, enhancer);
