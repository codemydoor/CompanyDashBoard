import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import CompanyInfo from "../component/CompanyInfo";

class CompanyList extends Component {
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

        {this.props.companies.map((item, index) => {
          return (
            <div>
              <CompanyInfo
                key={index}
                companyName={item.companyName}
                industry={item.industry}
                location={item.location}
                date={item.date}
                approve={item.approve}
                action={item.action}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  companies: state.company,
});

export default connect(mapStateToProps)(CompanyList);
