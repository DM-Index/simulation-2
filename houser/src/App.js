import React, { Component } from "react";

import Header from "./component/Header/Header";

import routes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>{routes}</div>
      </div>
    );
  }
}

export default App;
