import React from "react";
import "./assets/App.css";
import "./assets/Dropdown.css";
import Button from "./Button";

class Dropdown extends React.Component {
  constructor() {
    super();

    // setting initial state to top
    this.state = {
      position: "top",
    };
  }

  // this function is called when user select any position from dropdown
  handleChange = (e) => {
    // setting the position after fetching from event target value
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        {/* Dropdown List */}
        <select className="drop-down" onChange={this.handleChange}>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>

        {/* passing position as props in Button component */}
        <Button position={this.state.position} />
      </div>
    );
  }
}

export default Dropdown;
