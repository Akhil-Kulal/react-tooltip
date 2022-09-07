import React from "react";
import "./assets/Dropdown.css";

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
      </div>
    );
  }
}

export default Dropdown;
