import React, { Component } from "react";
import Form from "./Form";
import CompanyInfo from "../component/CompanyInfo";

class CompanyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: [
        {
          companyName: "",
          industry: "",
          location: "",
          date: "",
        },
      ],
    };
  }
  AddNewCompany = (newCompany) => {
    this.setState({
      ...this.state,
      company: [...this.state.company, newCompany],
    });
  };

  render() {
    return (
      <div>
        <Form addCompany={this.AddNewCompany} />

        {this.state.company.map((item) => {
          return (
            <div>
              <CompanyInfo />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CompanyList;
