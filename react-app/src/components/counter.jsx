import React, { Component } from "react";

//Setting Attributes
class Counter extends Component {
  state = {
    count: 1
  };

  styles = {
    backgroundColor: "green"
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 50 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>

        <button style={this.styles} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
