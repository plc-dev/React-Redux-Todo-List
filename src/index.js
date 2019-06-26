import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { initialState, reducer } from "./notiz_reducer";

import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";

import { Provider } from "react-redux";

const store = createStore(reducer, initialState);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
