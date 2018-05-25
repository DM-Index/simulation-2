import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Wizard.css";

export default class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event);
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <input
          className="wizard-input-name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          className="wizard-input-address"
          onChange={this.handleChange}
          value={this.state.address}
        />
        <input
          className="wizard-input-city"
          onChange={this.handleChange}
          value={this.state.city}
        />
        <input
          className="wizard-input-state"
          onChange={this.handleChange}
          value={this.state.state}
        />
        <input
          className="wizard-input-zipcode"
          onChange={this.handleChange}
          value={this.state.zipcode}
        />
        <button className="cancel-btn">
          {" "}
          Cancel
          <Link to={`/`} />
        </button>
      </div>
    );
  }
}
