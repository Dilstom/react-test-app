import React, { Component } from 'react';

class Counter extends Component {
 constructor() {
  super();
  this.state = {
   count: 0,
  };
 }

 handleIncrement = () => {
  this.setState({ count: this.state.count + 1 });
 };
 handleDecrement = () => {
  this.setState({ count: this.state.count - 1 });
 };

 render() {
  return (
   <div>
    Counter: {this.state.count}
    <div>
     <button onClick={this.handleIncrement}>+</button>
     <button onClick={this.handleDecrement}>-</button>
    </div>
   </div>
  );
 }
}

export default Counter;
