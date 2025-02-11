import React, { Component } from "react";
import "./App.css";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 }; // Initialize state
  }

  // Increment function
  increment = () => {
    this.setState({ num: this.state.num + 1 });
  };

  // Decrement function
  decrement = () => {
    if (this.state.num > 0) {
      this.setState({ num: this.state.num - 1 });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Counter</h1>
        <h1>{this.state.num}</h1>
        <div className="btns">
          <button onClick={this.increment} className="incbtn">Increment</button>
          <button onClick={this.decrement} className="decbtn">Decrement</button>
        </div>
      </div>
    );
  }
}

export default CounterClass;
