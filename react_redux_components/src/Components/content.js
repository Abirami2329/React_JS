import React from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import { getElementValue } from "../index";
function Content() {
  const dispatch = useDispatch();
  return (
    <div>
      <article className="content">
        <h1>CONTENT</h1>
        <input id="name" className="input" placeholder="Enter a Name"></input>
        <br></br>
        <button
          className="submitbtn"
          onClick={() => dispatch(getElementValue())} >
          SUBMIT
        </button>
      </article>
    </div>
  );
}

export default Content;
