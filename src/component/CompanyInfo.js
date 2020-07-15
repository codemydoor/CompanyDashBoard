import React from "react";
import "../css/companyInfo.css";
const CompanyInfo = (props) => {
  return (
    <div className="companyInfo">
      <span id="companyNames">{props.companyName}</span>
      <span id="industry">{props.industry}</span>
      <span id="location">{props.location}</span>
      <span id="date">{props.date}</span>
      <span id="date">{props.approve}</span>
      <span id="date">{props.action}</span>
      {/* <div className="logo"></div> */}
    </div>
  );
};

export default CompanyInfo;
