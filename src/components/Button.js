import React from "react";
import "../assets/App.css";
import "../assets/Button.css";

class Button extends React.Component {
  constructor(props) {
    super();

    // setting flag as false initially
    this.state = {
      flag: false,
    };

    // binding the current instant with the function call
    this.handleMouseIn = this.handleMouseIn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  // this function is called when mouse is hovered over the button
  handleMouseIn() {
    this.setState({ flag: true });
  }

  // this function is called when mouse is unhovered from the button
  handleMouseOut() {
    this.setState({ flag: false });
  }

  render() {
    // if flag is true, display->block otherwise none
    const toolTipVisibility = { display: this.state.flag ? "block" : "none" };

    // fetching position from props
    const { position } = this.props;

    return (
      <div className="App">
        <button
          onMouseOver={this.handleMouseIn}
          onMouseOut={this.handleMouseOut}
        >
          <span>Hover over me</span>
          {/* div for tooltip box */}
          <div className={position} style={toolTipVisibility}>
            Thanks for hovering !
          </div>
        </button>
      </div>
    );
  }
}

export default Button;
