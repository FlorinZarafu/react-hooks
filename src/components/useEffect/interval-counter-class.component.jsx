import React from "react";

class IntervalCounter extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.thick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  thick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h3>Interval counter</h3>
        {this.state.count}
      </div>
    );
  }
}
export default IntervalCounter;
