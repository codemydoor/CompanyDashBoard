import React, { Component } from "react";
import Form from "./Form";
import CompanyInfo from "../component/CompanyInfo";

class CompanyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: [
        {
          companyName: "unilever",
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

        {this.state.company.map((item, index) => {
          return (
            <div>
              <CompanyInfo
                key={index}
                companyName={item.companyName}
                industry={item.industry}
                location={item.location}
                date={item.date}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CompanyList;
