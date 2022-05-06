import React from "react";
import "./index.css";
import SideBar from "./Components/sidebar";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Content from "./Components/content";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

export const getElementValue = () => ({ type: "getValue" });
const initialState = {
  value: "",
  setSideBarOne: "HOME",
  setSideBarTwo: "CONTACT US",
  setSideBarThree: "ABOUT",
  sideBarClass: "sideBarButton",
};
const elementReducer = (state = initialState, action) => {
  if (action.type === "getValue") {
      const Values = document.querySelectorAll("h2");
      Values.forEach((element) => {
        element.textContent = "";
      });
      return {
        ...state,
        value: document.getElementById("name").value
      };
  } else {
      return state;
  }
};

const store = createStore(elementReducer);

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <SideBar />
    <Content />
    <Footer />
  </Provider>,
  document.getElementById("root")
);
