import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <button className="add-new-property-btn">
          {" "}
          Add Property
          <Link to={`/wizard`} />
        </button>
      </div>
    );
  }
}
