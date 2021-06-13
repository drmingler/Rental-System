export function startLoading(state) {
  state.isLoading = true;
}

export function loadingFailed(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export async function DispatchWrapper(dispatch, APICall, loading, failed) {
  try {
    dispatch(loading());
    await APICall();
  } catch (err) {
    dispatch(failed(err.toString()));
  }
}
