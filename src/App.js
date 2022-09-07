import React from "react";
import "./assets/App.css";
import Dropdown from "./Dropdown";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading">React Tooltip</h1>
        <Dropdown />
      </div>
    );
  }
}

export default App;
