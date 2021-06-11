import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  type: "",
  message: ""
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    alertSuccess(state, action) {
      state.type = "success";
      state.message = action.payload;
    },
    alertFailure(state, action) {
      state.type = "failure";
      state.message = action.payload;
    },
    alertClear(state) {
      state.type = "";
      state.message = "";
    }
  }
});

export const { alertSuccess, alertFailure, alertClear } = notificationSlice.actions;

export default notificationSlice.reducer;
