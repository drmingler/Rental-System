export function startLoading(state) {
  state.isLoading = true;
}

export function loadingFailed(state, action) {
  state.error = action.payload;
  state.isLoading = false;
}

export async function DispatchWrapper(dispatch, APICall, loading, failed) {
  try {
    dispatch(loading());
    await APICall();
  } catch (err) {
    dispatch(failed(err.toString()));
  }
}
