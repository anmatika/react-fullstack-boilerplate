import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Main from '../views/Main';

const rootElement = document.getElementById('root');
const reactRoot = (
  <Provider store={store}>
    <AppContainer>
      <Main />
    </AppContainer>
  </Provider>
);

render(reactRoot, rootElement);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('../views/Main', () =>
      render(Object.assign({}, reactRoot), rootElement));
  }
} else {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
