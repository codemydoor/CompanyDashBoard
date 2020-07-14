import React from "react";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <div className="header">
      <span className="headerTag">
        <i className="glyphicon glyphicon-cog"></i>Dashboard
      </span>

      <span className="button">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Add Startup
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="f">
              New Startup
            </a>
            <a className="dropdown-item" href="f">
              Edit Startup
            </a>
            <a className="dropdown-item" href="f">
              Dashboard
            </a>
          </div>
        </div>
      </span>
    </div>
  );
};
export default Navbar;
