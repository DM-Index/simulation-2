import React, { Component } from "react";

import Dashboard from "./component/Dashboard/Dashboard";
import House from "./component/House/House";
import Wizard from "./component/Wizard/Wizard";
import Header from "./component/Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard>
          <House />
        </Dashboard>
        <Wizard />
        <Header />
      </div>
    );
  }
}

export default App;
