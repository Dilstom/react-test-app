import React, { Component } from 'react';
import Counter from './Counter';
import Profile from './Profile';
import './App.css';

class App extends Component {
 constructor() {
  super();
  this.state = {
   employees: [
    {
     name: 'Jow',
     position: 'Software Engineer',
    },
    {
     name: 'Jane',
     position: 'PM',
    },
    {
     name: 'John',
     position: 'CEO',
    },
   ],
  };
 }
 render() {
  return (
   <div className="App">
    <h1>Blank page</h1>
    <Counter />
    {/* <Counter />
   <Counter />
   <Counter />
   <Counter /> */}
    {this.state.employees.map(p => {
     return (
      <Profile
       key={Math.random(Date.now)}
       name={p.name}
       position={p.position}
      />
     );
    })}
    {/* <Profile name="Cam" position="CEO" /> */}
   </div>
  );
 }
}

export default App;
