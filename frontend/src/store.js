// Holds Redux store logic

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// holds all the enhancers
const enhancers = [];

// holds all the redux middlewares used
const middleware = [thunk];

// add redux devtools enhancer for dev env
if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export default createStore(rootReducer, composedEnhancers);
