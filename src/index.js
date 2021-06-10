import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import store from "./store/store";
import {Provider} from "react-redux";

ReactDOM.render(
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>,
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
