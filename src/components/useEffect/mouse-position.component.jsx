import React from "react";

class LogMouse extends React.Component {
  state = {
    x: 0,
    y: 0,
  };
  logMousePosition = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <div>
        <h1>Mouse Position</h1>X - {this.state.x}
        <br />Y - {this.state.y}
      </div>
    );
  }
}
export default LogMouse;
