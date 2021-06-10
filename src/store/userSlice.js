import {createSlice} from "@reduxjs/toolkit";
import {DispatchWrapper, loadingFailed, startLoading} from "./constants";
import {FetchLandlordProfile, FetchUserProfile, UpdateUserProfile} from "../api/api";

const initialState = {
  isLoading: false,
  otherUser: {},
  landlord: {},
  currentUser: {},
  error: null
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    loading: startLoading,
    setUser(state, action) {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    setLandlord(state, action) {
      state.isLoading = false;
      state.landlord = action.payload;
      state.error = null;
    },
    setOtherUser(state, action) {
      state.isLoading = false;
      state.otherUser = action.payload;
      state.error = null;
    },
    failed: loadingFailed
  }
});

export const {
  loading,
  setUser,
  setLandlord,
  setOtherUser,
  failed
} = usersSlice.actions;

export const handleGetUser = userId => {
  return async dispatch => {
    async function APICall() {
      const user = await FetchUserProfile(userId);
      dispatch(setUser(user));
    }

    return DispatchWrapper(dispatch, APICall);
  };
};

export const handleUpdateUser = (userId, userData) => {
  return async dispatch => {
    async function APICall() {
      const user = await UpdateUserProfile(userId, userData);
      dispatch(setUser(user));
    }

    return DispatchWrapper(dispatch, APICall);
  };
};

export const handleGetLandlord = userId => {
  return async dispatch => {
    async function APICall() {
      const user = await FetchLandlordProfile(userId);
      dispatch(setLandlord(user));
    }

    return DispatchWrapper(dispatch, APICall);
  };
};

export const handleGetOtherUser = userId => {
  return async dispatch => {
    async function APICall() {
      const user = await FetchUserProfile(userId);
      dispatch(setOtherUser(user));
    }

    return DispatchWrapper(dispatch, APICall);
  };
};

export default usersSlice.reducer;
