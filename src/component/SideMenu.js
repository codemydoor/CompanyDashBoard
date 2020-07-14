import React from "react";
import "../css/SideMenu.css";
function SideMenu() {
  return (
    <div className="menu">
      <ul>
        <li id="dashtag">
          <h4>Dashboard</h4>
        </li>
        <li className="dashtags">
          <a href="/addstartup">Add Startup</a>
        </li>
        <li className="dashtags">
          <a href={{}}>Dashboard</a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
