import React, { Component } from "react";
// Components
import Header from "./component/Header/Header";
// Middleware
import { HashRouter } from "react-router-dom";
import routes from "./routes";
// Styling
import "./base_styles/App.css";
// App will stay stateless and thus without methods.
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <div>{routes}</div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
