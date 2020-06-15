import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';

import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Checkout from './Checkout';

class App extends Component {

  constructor(){
    super();
    this.state = {
      items: [],
      total: 0.0,
      empty: true
    }
    this.addToCart = this.addToCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

                    // Method deletes all items in the cart
                    // This method is passed to a Checkout component via properties
  emptyCart(){
    this.setState({
      items: [],
      total: 0.0,
      empty: true
    })
  }


                    // Method receives an item and a quantity for this item and
                    // updates the cart with these values
                    // This method is passed to a Menu component via properties
  addToCart(item, quantity){
    console.log(quantity);
    item.quantity = quantity;
    let tempItems = this.state.items;
    let tempTotal = this.state.total;
    console.log(tempItems.push({
      item: item,
      quantity: quantity
  }));
    tempTotal+= item.price * item.quantity;
    this.setState({
      items: tempItems,
      total: tempTotal,
      empty: false
    })
  }

  render(){

  return (
    <Router>
    <div className="App">
      <Header total={this.state.total}/>
      <Route path="/" component={Home} exact />
      <Route path="/menu" render={()=>
        <Menu total={this.state.total} 
        items={this.state.items} 
        addToCart={this.addToCart}/>}  />
      <Route path="/checkout" render={()=>
         <Checkout total={this.state.total}
          items={this.state.items}
           empty={this.state.empty}
           emptyCart={this.emptyCart}/>}  />
    </div>
    </Router>
  )};
}

export default App;
