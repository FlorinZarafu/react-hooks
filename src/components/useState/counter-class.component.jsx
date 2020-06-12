import React from "react";

class CounterClass extends React.Component {
  state = { count: 0 };
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        Count {this.state.count}
        <button onClick={this.incrementCount}>click</button>
      </div>
    );
  }
}
export default CounterClass;
