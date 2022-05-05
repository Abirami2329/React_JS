import React from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
function SideBar() {
  const elementValue = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <nav id = 'sideBar' className="navigation">
        <h1>SIDE BAR</h1>
        <h3 className = {elementValue.sideBarClass}>{elementValue.setSideBarOne}</h3>
        <h3 className = {elementValue.sideBarClass}>{elementValue.setSideBarTwo}</h3>
        <h3 className = {elementValue.sideBarClass}>{elementValue.setSideBarThree}</h3>
      </nav>
    </div>
  );
}

export default SideBar;
