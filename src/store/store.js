import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import logger from "redux-logger";
import userSlice from "./userSlice";
import authSlice from "./authSlice";

let middleware = [...getDefaultMiddleware(), logger];

const rootReducer = combineReducers({
  auth: authSlice,
  users: userSlice
});

const store = configureStore({
  middleware,
  reducer: rootReducer
});

export default store;