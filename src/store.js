import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import thunk from "redux-thunk";

import { trackingReducer, historyReducer } from "./reducers";

import api from "./api";

// Определяем rootReducer

const rootReducer = combineReducers({
  trackingReducer,
  historyReducer
});

// Инициализируем store

const store = createStore(
  rootReducer,
  {},
  // applyMiddleware(thunk)
  applyMiddleware(thunk.withExtraArgument({ api }))
);

export default store;
