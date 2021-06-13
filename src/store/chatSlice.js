import {createSlice} from "@reduxjs/toolkit";
import {DispatchWrapper, loadingFailed, startLoading} from "./constants";
import {FetchConversation, FetchLastChats} from "../api/api";

const initialState = {
  pageNumber: 0,
  isLoading: false,
  connectionStatus: "",
  conversation: [],
  lastChats: [],
  error: null
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    loading: startLoading,
    setOnConnectionChange(state, action) {
      state.connectionStatus = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setOnMessage(state, action) {
      state.conversation.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    setOnMessageSent(state) {
      state.isLoading = false;
      state.error = null;
    },
    setLastChats(state, action) {
      const { pageCount, results } = action.payload;
      state.pageNumber = pageCount;
      state.lastChats = results;
      state.isLoading = false;
      state.error = null;
    },
    setConversation(state, action) {
      const { pageCount, results } = action.payload;
      state.pageNumber = pageCount;
      state.conversation = results;
      state.isLoading = false;
      state.error = null;
    },
    failed: loadingFailed
  }
});

export const {
  loading,
  setOnConnectionChange,
  setLastChats,
  setConversation,
  setOnMessageSent,
  setOnMessage,
  failed
} = chatSlice.actions;

export const handleGetConversations = otherUserId => {
  return async dispatch => {
    async function APICall() {
      const conversations = await FetchConversation(otherUserId);
      dispatch(setConversation(conversations));
    }

    return DispatchWrapper(dispatch, APICall, loading, failed);
  };
};

export const handleLastChats = () => {
  return async dispatch => {
    async function APICall() {
      const chats = await FetchLastChats();
      dispatch(setLastChats(chats));
    }

    return DispatchWrapper(dispatch, APICall, loading, failed);
  };
};

export const handleOnMessageReceived = rawMessage => {
  return async dispatch => {
    let message = JSON.parse(rawMessage);
    dispatch(setOnMessage(message));
  };
};

export const handleMessageSend = (connection, rawMessage) => {
  return async dispatch => {
    let message = JSON.stringify({
      message: rawMessage["message"]
    });
    await connection.send(message);
    dispatch(setOnMessageSent());
  };
};

export const handleOnConnectionChange = status => {
  return async dispatch => {
    dispatch(setOnConnectionChange(status));
  };
};

export default chatSlice.reducer;
