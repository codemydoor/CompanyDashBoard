import React, { Component } from "react";
import "../css/Form.css";

class Form extends Component {
  constructor(props) {
    super();
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
    this.handleChange = this.handleChange.bind(this);
  }
  // functions
  handleChange(event) {
    this.setState({
      [event.target.value]: event.target.name,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newCompany = {
      companyName: this.state.companyName,
      industry: this.state.industry,
      location: this.state.location,
      date: this.state.date,
    };
    this.props.addCompany(newCompany);

    this.setState({
      companyName: "",
      industry: "",
      location: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          className="inputFields"
          onChange={this.handleChange}
          value={this.state.companyName}
        />
        <br />
        <input
          type="text"
          name="industry"
          placeholder="Industry"
          className="inputFields"
          onChange={this.handleChange}
          value={this.state.industry}
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="inputFields"
          onChange={this.handleChange}
          value={this.state.location}
        />{" "}
        <br />
        <input type="checkbox" className="checkBox" />
        <span id="checkBox">Chech if approved</span>
        <br />
        <span>
          <button type="submit" className="submitButton">
            Submit
          </button>
          <button type="reset" className="submitButton" id="cancelButton">
            Cancel
          </button>
        </span>
      </form>
    );
  }
}

export default Form;
