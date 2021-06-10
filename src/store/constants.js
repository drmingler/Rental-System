import {failed, loading} from "./userSlice";

export function startLoading(state) {
    state.isLoading = true;
}

export function loadingFailed(state, action) {
    state.isLoading = false;
    state.error = action.payload;
}

export function DispatchWrapper(dispatch, callback) {
    try {
        dispatch(loading());
        callback();
    } catch (err) {
        console.log(err)
        dispatch(failed(err.toString()));
    }
}
