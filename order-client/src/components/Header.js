import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {


  render(){

  return (
    <div> <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <span className="navbar-brand" ><NavLink to="/" activeClassName="selected" exact>Welcome to Isaak's</NavLink></span>
        </li>
        <li className="nav-item active" >
          <span className="navbar-brand" ><NavLink to="/menu" activeClassName="selected">Menu</NavLink></span>
        </li>
        <li className="nav-item active">
          <span className="navbar-brand"><NavLink to="/checkout" activeClassName="selected">Checkout CA${(Math.round(this.props.total * 100) / 100).toFixed(2)} </NavLink></span>
        </li>
      </ul>
    </div>
  </nav></div>
  )};
}

export default Header;