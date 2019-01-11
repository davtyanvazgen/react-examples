import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button>Increment</button>
      </div>

      //Compiling without <div>
      //<React.Fragment>
      // <h1>Hello World</h1>
      // <button>Increment</button>;
      //</React.Fragment>
    );
  }
}

export default Counter;

//Embedding Expressions
