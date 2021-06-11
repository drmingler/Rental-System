import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import logger from "redux-logger";
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import propertySlice from "./propertySlice";
import locationSlice from "./locationSlice";

let middleware = [...getDefaultMiddleware(), logger];

const rootReducer = combineReducers({
  auth: authSlice,
  users: userSlice,
  property: propertySlice,
  location: locationSlice
});

const store = configureStore({
  middleware,
  reducer: rootReducer
});

export default store;
