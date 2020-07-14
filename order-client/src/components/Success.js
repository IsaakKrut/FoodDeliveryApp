import React, { Component } from 'react';

class Success extends Component {


  render(){

  return (
    <div>Success
        <h3>Your order was submitted. Confirmation Email was sent to {this.props.email}</h3>
    </div>
  )};
}

export default Success;