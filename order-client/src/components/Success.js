import React, { Component } from 'react';
import { withRouter } from 'react-router'; 

class Success extends Component {


  render(){

  return (
    <div className="text-center">
        <h3>Your order was submitted. Confirmation Email was sent to {this.props.email}</h3>
        <div className="text-center"> <p>Return to the <a href="/menu">Menu</a> to create a new order</p></div> 
    </div>
  )};
}

export default withRouter(Success);