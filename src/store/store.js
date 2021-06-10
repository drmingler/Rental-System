import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {combineReducers} from "redux";

const rootReducer = combineReducers({});
let middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  middleware,
  reducer: rootReducer
});

export default store;
