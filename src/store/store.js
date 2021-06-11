import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import logger from "redux-logger";
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import propertySlice from "./propertySlice";
import locationSlice from "./locationSlice";
import transactionSlice from "./transactionSlice";
import notificationSlice from "./notificationSlice";

let middleware = [...getDefaultMiddleware(), logger];

const rootReducer = combineReducers({
  auth: authSlice,
  users: userSlice,
  property: propertySlice,
  location: locationSlice,
  transaction: transactionSlice,
  notification: notificationSlice
});

const store = configureStore({
  middleware,
  reducer: rootReducer
});

export default store;
