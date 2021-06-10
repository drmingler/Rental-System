export function startLoading(state) {
    state.isLoading = true;
}

export function loadingFailed(state, action) {
    state.isLoading = false;
    state.error = action.payload;
}
