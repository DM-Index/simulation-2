import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
  }

  componentDidMount() {}

  render() {
    const houseMap = houses.map();
    return (
      <div>
        <button className="add-new-property-btn">
          {" "}
          Add Property
          <Link to={`/wizard/step1`} />
        </button>
      </div>
    );
  }
}
