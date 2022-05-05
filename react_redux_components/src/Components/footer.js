import React from "react";
import "../index.css";
import {useDispatch, useSelector} from 'react-redux';
function Footer() {
    const elementValue = useSelector((state) => state);
    console.log(useSelector((state) => state))
    const dispatch = useDispatch();
    return (
      <div id="Footer">
        <footer className="footer">
          <h2>Footer</h2>
          <h1>{elementValue.value}</h1>
        </footer>
      </div>
    );
  }
  export default Footer;