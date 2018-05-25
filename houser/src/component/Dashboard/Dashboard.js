import React, { Component } from "react";
import { Link } from "react-router-dom";
// state, a house object, getAll houses from database, delete houses from database, layer 3
export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get();
  }

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
