import {createSlice} from "@reduxjs/toolkit";
import {DispatchWrapper, loadingFailed, startLoading} from "./constants";
import {
  CreateProperty,
  DeleteProperty,
  GetProperties,
  GetProperty,
  SearchProperties,
  UpdateProperty,
  UploadObject
} from "../api/api";

const initialState = {
  pageNumber: 0,
  isLoading: false,
  currentProperty: {},
  properties: [],
  error: null
};

const propertySlice = createSlice({
  name: "property",
  initialState: initialState,
  reducers: {
    loading: startLoading,
    setProperty(state, action) {
      state.currentProperty = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setProperties(state, action) {
      const { pageCount, results } = action.payload;
      state.pageCount = pageCount;
      state.properties = results;
      state.isLoading = false;
      state.error = null;
    },
    deleteProperty(state, action) {
      const id = action.payload;
      state.properties = state.properties.filter(
        property => property.id !== id
      );
      state.isLoading = false;
      state.error = null;
    },
    propertyObjectUploaded(state) {
      state.isLoading = false;
      state.error = null;
    },
    failed: loadingFailed
  }
});

export const {
  loading,
  setProperty,
  setProperties,
  deleteProperty,
  propertyObjectUploaded,
  failed
} = propertySlice.actions;

export const handleGetProperty = propertyId => {
  return async dispatch => {
    async function APICall() {
      const property = await GetProperty(propertyId);
      dispatch(setProperty(property));
    }

    return DispatchWrapper(dispatch, APICall);
  };
};

export const handleSearchProperties = query => {
  return async dispatch => {
    async function APICall() {
      const property = await SearchProperties(query);
      dispatch(setProperties(property));
    }

    return DispatchWrapper(dispatch, APICall);
  };
};

export const handleGetProperties = () => {
  return async dispatch => {
    async function APICall() {
      const property = await GetProperties();
      dispatch(setProperties(property));
    }

    return DispatchWrapper(dispatch, APICall);
  };
};

export const handleUpdateProperty = (propertyId, property) => {
  return async dispatch => {
    async function APICall() {
      const updatedProperty = await UpdateProperty(propertyId, property);
      dispatch(setProperty(updatedProperty));
    }

    return DispatchWrapper(dispatch, APICall);
  };
};

export const handleCreateProperty = property => {
  return async dispatch => {
    async function APICall() {
      const updatedProperty = await CreateProperty(property);
      dispatch(setProperty(updatedProperty));
    }

    return DispatchWrapper(dispatch, APICall);
  };
};

export const handleDeleteProperty = propertyId => {
  return async dispatch => {
    async function APICall() {
      await DeleteProperty(propertyId);
      dispatch(deleteProperty(propertyId));
    }

    return DispatchWrapper(dispatch, APICall);
  };
};

export const HandleUploadObject = propertyObject => {
  return async dispatch => {
    async function APICall() {
      await UploadObject(propertyObject);
      dispatch(propertyObjectUploaded());
    }
    return DispatchWrapper(dispatch, APICall);
  };
};

export default propertySlice.reducer;
