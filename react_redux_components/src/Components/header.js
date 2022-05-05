import React from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const elementValue = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div id="Header">
      <header className="header">
        <h2>Header</h2>
        <h1>{elementValue.value}</h1>
      </header>
    </div>
  );
}

export default Header;
