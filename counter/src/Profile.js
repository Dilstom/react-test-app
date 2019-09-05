import React, { Component } from 'react';

class Profile extends Component {
 //  handleSelect = () => this.props.handleSelect(this.props.id);
 render() {
  console.log(this.props);
  return (
   <div>
    <img src="https://via.placeholder.com/250" alt="pic" />
    <h4>{this.props.name}</h4>
    <p>{this.props.position}</p>
    <button onClick={() => this.props.handleSelect(this.props.id)}>
     {/* <button onClick={this.handleSelect}> */}
     Set {this.props.name} as Employee Of The Month
    </button>
   </div>
  );
 }
}

export default Profile;
