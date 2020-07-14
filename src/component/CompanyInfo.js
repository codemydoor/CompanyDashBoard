import React from "react";
import "../css/companyInfo.css";
const CompanyInfo = (props) => {
  return (
    <div className="companyInfo">
      <h1>{props.companyName}</h1>
      <h1>{props.industry}</h1>
      <h1>{props.location}</h1>
      <h1>{props.date}</h1>
    </div>
  );
};

export default CompanyInfo;
