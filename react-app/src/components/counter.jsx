import React, { Component } from "react";

//Updating the State with - setState() method
class Counter extends Component {
  state = {
    count: 0
  };

  handlingIncrement = () => {
    // instead " this.state.count++ " we muste use setState() method
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handlingIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getbadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
