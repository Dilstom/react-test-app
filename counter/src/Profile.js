import React, { Component } from 'react';

class Profile extends Component {
 render() {
  return (
   <div>
    <img src="https://via.placeholder.com/250" alt="pic" />
    <h4>{this.props.name}</h4>
    <p>{this.props.position}</p>
   </div>
  );
 }
}

export default Profile;
