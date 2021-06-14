import {createSlice} from "@reduxjs/toolkit";
import {DispatchWrapper, loadingFailed, startLoading} from "./constants";
import {
  CreateUser,
  FetchLandlordProfile,
  FetchUserCompleteProfile,
  FetchUserSimpleProfile,
  UpdateUserProfile
} from "../api/api";

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

export const handleGetSimpleUser = userId => {
  return async dispatch => {
    async function APICall() {
      const user = await FetchUserSimpleProfile(userId);
      dispatch(setUser(user));
    }

    return DispatchWrapper(dispatch, APICall, loading, failed);
  };
};

export const handleGetCompleteUser = () => {
  return async dispatch => {
    async function APICall() {
      const user = await FetchUserCompleteProfile();
      dispatch(setUser(user));
    }

    return DispatchWrapper(dispatch, APICall, loading, failed);
  };
};

export const handleCreateUser = (userData, history) => {
         return async dispatch => {
           async function APICall() {
             const user = await CreateUser(userData);
             dispatch(setUser(user));
             history.push("/login");
           }

           return DispatchWrapper(dispatch, APICall, loading, failed);
         };
       };


export const handleUpdateUser = (userId, userData) => {
  return async dispatch => {
    async function APICall() {
      const user = await UpdateUserProfile(userId, userData);
      dispatch(setUser(user));
    }

    return DispatchWrapper(dispatch, APICall, loading, failed);
  };
};

export const handleGetLandlord = userId => {
  return async dispatch => {
    async function APICall() {
      const user = await FetchLandlordProfile(userId);
      dispatch(setLandlord(user));
    }

    return DispatchWrapper(dispatch, APICall, loading, failed);
  };
};

export const handleGetOtherUser = userId => {
  return async dispatch => {
    async function APICall() {
      const user = await FetchUserSimpleProfile(userId);
      dispatch(setOtherUser(user));
    }

    return DispatchWrapper(dispatch, APICall, loading, failed);
  };
};

export default usersSlice.reducer;
