import React from "react";
import "../css/Label.css";

function Label() {
  return (
    <div className="contenBox">
      <div className="contentTag"></div>
      <input className="filterBox" placeholder="Filter Startups" />
      <div className="label">
        <div className="heading">
          <span>Company</span>
          <span id="tag">Market/Industry</span>
          <span id="tag">Location</span>
          <span id="tag">Joined</span>
          <span id="tag1">Approve</span>
          <span id="tag1">Action</span>
        </div>
      </div>
    </div>
  );
}

export default Label;
