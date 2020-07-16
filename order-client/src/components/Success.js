import React, { Component } from 'react';
import { withRouter } from 'react-router'; 
import { Link } from 'react-router-dom'

class Success extends Component {


  render(){

  return (
    <div className="text-center">
        <h3>Your order was submitted. Confirmation Email was sent to {this.props.email}</h3>
        <div className="text-center"> 
          <p>Return to the <Link to="/menu">Menu</Link> to create a new order</p>
          <p>Visit <Link to="/history">Order History</Link> to view your past orders</p>
        </div> 
    </div>
  )};
}

export default withRouter(Success);