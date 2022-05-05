import React from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { getElementValue} from "../index";
function Content() {
  const elementValue = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <article className="content">
        <h1>CONTENT</h1>
        <input id="name" className="input" placeholder="Enter a Name"></input>
        <br></br>
        <button className="submitbtn" onClick={() => dispatch(getElementValue())}>SUBMIT </button>
      </article>
    </div>
  );
}

export default Content;
