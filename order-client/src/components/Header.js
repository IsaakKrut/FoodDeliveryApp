import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {


  render(){

  return (
    <div> <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand"><NavLink to="/">Welcome to Isaak's</NavLink></span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <span className="navbar-brand"><NavLink to="/menu">Menu</NavLink></span>
        </li>
        <li className="nav-item active">
        <span className="navbar-brand"><NavLink to="/checkout">Checkout CA${(Math.round(this.props.total * 100) / 100).toFixed(2)} </NavLink></span>
        </li>
      </ul>
    </div>
  </nav></div>
  )};
}

export default Header;