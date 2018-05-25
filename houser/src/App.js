import React, { Component } from "react";

import Header from "./component/Header/Header";

// import { HashRouter } from "react-router-dom";
import routes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      // <HashRouter>
      <div className="App">
        <Header />

        <div>{routes}</div>
      </div>
      // </HashRouter>
    );
  }
}

export default App;
