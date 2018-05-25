import React, { Component } from "react";
import { Link } from "react-router-dom";

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
  }
  render() {
    return (
      <div>
        <input className="wizard-input-name" value={this.state.name} />
        <input className="wizard-input-address" value={this.state.address} />
        <input className="wizard-input-city" value={this.state.city} />
        <input className="wizard-input-state" value={this.state.state} />
        <input className="wizard-input-zipcode" value={this.state.zipcode} />
        <button className="cancel-btn">
          {" "}
          Cancel
          <Link to={`/`} />
        </button>
      </div>
    );
  }
}
