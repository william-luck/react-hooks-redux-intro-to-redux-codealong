import React from "react";
import ReactDOM from "react-dom";
import counterReducer from "./features/counter/counterSlice.js";
import App from "./App";
import "./index.css";

// Additions
import { createStore } from "redux";
import { Provider } from "react-redux";

// The reducer is defined in a separate features file
const store = createStore(
    counterReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

// Use the Provider to wrap app, passing store down as a prop. 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);

