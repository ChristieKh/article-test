import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import {createBrowserHistory} from "history";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./modules";
import {saga} from "./sagas";

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();
const middleware = [
    routerMiddleware(history),
    sagaMiddleware
];


if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
);


sagaMiddleware.run(saga);

export default store