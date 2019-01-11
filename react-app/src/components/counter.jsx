import React, { Component } from "react";

//Embedding Expressions
class Counter extends Component {
  state = {
    count: 2019
  };

  render() {
    return (
      <div>
        <span>Hello World {this.formatCount()} </span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    //return this.state.count === 0 ? "Zero" : this.state.count;
    // or
    const { count } = this.state;
    return count === 2018 ? "Zero" : count;
  }
}

export default Counter;
