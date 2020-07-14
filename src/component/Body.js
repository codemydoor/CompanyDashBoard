import React from "react";
import SideMenu from "./SideMenu";
import "../css/body.css";
import Label from "./Label";
import CompanyList from "./CompanyList";

function Body() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideMenu />
          </div>
          <div className="col-md-10 body">
            <Label />
            <CompanyList />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
