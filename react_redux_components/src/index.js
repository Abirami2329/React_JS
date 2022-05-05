import React from "react";
import "./index.css";
import Components from "./App.js";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

export const getElementValue = () => ({ type: "getValue" });

const elementReducer = (state, action) => {
  if (action.type === "getValue") {
    return (state = document.getElementById("name").value);
  }
};

const store = createStore(elementReducer);

ReactDOM.render(
  <Provider store={store}>
    <Components/>
  </Provider> ,
  document.getElementById("root")
);
