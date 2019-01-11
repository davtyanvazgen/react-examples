import React, { Component } from "react";

//Conditional Rendering
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    tags1: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderTags()}
        {this.state.tags1.length === 0 && "Please create a new tag!"}
      </div>
    );
  }
}

export default Counter;
