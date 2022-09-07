import React from "react";
import "./assets/Dropdown.css";
import Button from "./Button";

class Dropdown extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Dropdown List */}
        <select className="drop-down">
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
        <Button />
      </div>
    );
  }
}

export default Dropdown;
