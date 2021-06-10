import {createSlice} from "@reduxjs/toolkit";
import {DispatchWrapper, loadingFailed, startLoading} from "./constants";
import {Login} from "../api/api";
import {logout} from "../api/apiUtils";

const initialState = {
  isLoading: false,
  token: null,
  error: null
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loading: startLoading,
    setToken(state, action) {
      state.token = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    failed: loadingFailed
  }
});

export const { loading, setToken, failed } = authSlice.actions;

export const handleLogin = loginDetails => {
  return async dispatch => {
    async function APICall() {
      const token = await Login(loginDetails);
      localStorage.setItem("token", token.access);
      dispatch(setToken(token.access));
    }
    return DispatchWrapper(dispatch, APICall);
  };
};

export const handleLogout = () => {
  return async dispatch => {
    dispatch(setToken(null));
    logout();
  };
};
export default authSlice.reducer;
