import {createSlice} from "@reduxjs/toolkit";
import {DispatchWrapper, loadingFailed, startLoading} from "./constants";
import {CreateSubscription, GetTransactionsHistory} from "../api/api";

const initialState = {
  pageCount: 0,
  isLoading: false,
  transactions: [],
  error: null
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState: initialState,
  reducers: {
    loading: startLoading,
    setTransactions(state, action) {
      const { pageCount, results } = action.payload;
      state.pageCount = pageCount;
      state.isLoading = false;
      state.transactions = results;
      state.error = null;
    },
    subscriptionCreated(state) {
      state.isLoading = false;
      state.error = null;
    },
    failed: loadingFailed
  }
});

export const {
  loading,
  setTransactions,
  subscriptionCreated,
  failed
} = transactionSlice.actions;

export const handleCreateSubscription = subscriptionDetails => {
  return async dispatch => {
    async function APICall() {
      await CreateSubscription(subscriptionDetails);
      dispatch(subscriptionCreated());
    }

    return DispatchWrapper(dispatch, APICall, loading, failed);
  };
};

export const handleGetSubscriptions = () => {
  return async dispatch => {
    async function APICall() {
      const subscriptions = await GetTransactionsHistory();
      dispatch(setTransactions(subscriptions));
    }

    return DispatchWrapper(dispatch, APICall, loading, failed);
  };
};

export default transactionSlice.reducer;
