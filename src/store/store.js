import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root.saga";

import { rootReducer } from "./root-reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const SagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV !== "production" && logger,
    SagaMiddleware,
].filter(Boolean);

const composeEnhancers =
    (process.env.NODE_ENV !== "production" &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);

SagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
