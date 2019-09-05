import React, { Component } from 'react';
import Counter from './Counter';
import Profile from './Profile';
import './App.css';

const data = [
 {
  id: '1',
  name: 'Jow',
  position: 'Software Engineer',
 },
 {
  id: '2',
  name: 'Jane',
  position: 'PM',
 },
 {
  id: '3',
  name: 'John',
  position: 'CEO',
 },
];

class App extends Component {
 constructor() {
  super();
  this.state = {
   employees: data,
   selectedId: '0',
  };
 }

 handleSelect = id => {
  this.setState({ selectedId: id });
  //   const copy = this.state.employees.slice();
  //   const [selectedEmpl] = copy.filter(em => em.id === id);
  //   console.log(selectedEmpl);
  //   this.setState({ selectedId: selectedEmpl.id });
 };

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
      <div
       style={{
        backgroundColor: p.id === this.state.selectedId ? 'green' : null,
       }}
       key={Math.random(Date.now)}
      >
       <Profile
        name={p.name}
        handleSelect={this.handleSelect}
        position={p.position}
        id={p.id}
       />
      </div>
     );
    })}
    {/* <Profile name="Cam" position="CEO" /> */}
   </div>
  );
 }
}

export default App;
