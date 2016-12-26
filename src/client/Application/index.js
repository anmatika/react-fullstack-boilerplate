import {AppContainer} from "react-hot-loader";
import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {middleware as reduxPackMiddleware} from "redux-pack";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import rootReducer from "../reducers";
import Main from "../views/Main";

const reduxMiddleware = applyMiddleware(thunk, reduxPackMiddleware);

const enhancer =
    process.env.NODE_ENV === 'development' ?
        compose(reduxMiddleware, ...(window.devToolsExtension ? [window.devToolsExtension()] : [])) :
        reduxMiddleware;

const store = createStore(rootReducer, enhancer);

const rootElement = document.getElementById('root');
const reactRoot =
    <Provider store={store}>
        <AppContainer>
            <Main />
        </AppContainer>
    </Provider>;

render(reactRoot, rootElement);

if (module.hot) {
    module.hot.accept('../views/Main', () =>
        render(
            <Provider store={store}>
                <AppContainer>
                    <Main />
                </AppContainer>
            </Provider>,
            rootElement)
    );
}