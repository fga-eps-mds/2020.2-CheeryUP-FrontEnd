import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { rootReducer } from "./store/index";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
