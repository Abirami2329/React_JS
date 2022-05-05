import React from "react";
import "../index.css";
import { useSelector } from "react-redux";
function SideBar() {
  const elementValue = useSelector((state) => state);
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
