import React, { Component } from 'react';

class Failure extends Component {


  render(){

  return (
    <div>Failure
        <h1>{this.props.message}</h1>
    </div>
    
  )};
}

export default Failure;