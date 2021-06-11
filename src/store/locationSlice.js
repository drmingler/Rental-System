import {createSlice} from "@reduxjs/toolkit";
import {DispatchWrapper, loadingFailed, startLoading} from "./constants";
import {GetLocationCoordinates} from "../api/api";

const initialState = {
  pageCount: 0,
  isLoading: false,
  locations: [],
  error: null
};

const locationSlice = createSlice({
  name: "locations",
  initialState: initialState,
  reducers: {
    loading: startLoading,
    setAvailableLocations(state, action) {
      const { pageCount, results } = action.payload;
      state.pageCount = pageCount;
      state.isLoading = false;
      state.locations = results;
      state.error = null;
    },
    failed: loadingFailed
  }
});

export const { loading, setAvailableLocations, failed } = locationSlice.actions;

export const handleGetLocations = () => {
  return async dispatch => {
    async function APICall() {
      const locations = await GetLocationCoordinates();
      dispatch(setAvailableLocations(locations));
    }

    return DispatchWrapper(dispatch, APICall, loading, failed);
  };
};

export default locationSlice.reducer;
