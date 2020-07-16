import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.css';




import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Checkout from './Checkout';
import History from './History';
import Success from './Success';
import Failure from './Failure';

class App extends Component {

  constructor(){
    super();
    this.state = {
      items: [],
      total: 0.0,
      empty: true,
      errorMessage: 'error',
      email: ''
    }
    this.addToCart = this.addToCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.setError = this.setError.bind(this);
    this.setEmail = this.setEmail.bind(this);
  }

                  // Method sets an error message being passed to the failure page

  setError(error){
    this.setState({
      errorMessage: error
    });
  }


                  // Method sets an email for the current user
  setEmail(email){
    console.log(email);
    this.setState({
      email: email
    });
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
    <div>
      <Header total={this.state.total}
          setEmail={this.setEmail}/>
      <Switch>
        <Route path="/" component={Home} exact 
        />
        <Route path="/menu" render={()=>
          <Menu total={this.state.total} 
          items={this.state.items} 
          addToCart={this.addToCart}/>} 
        />
        <Route path="/checkout" render={()=>
          <Checkout total={this.state.total}
            items={this.state.items}
            empty={this.state.empty}
            emptyCart={this.emptyCart}
            setError={this.setError}
            setEmail={this.setEmail}
          />}  
        />
        <Route path="/failure" render={()=>
          <Failure message={this.state.errorMessage}/>}  
        />
        <Route path="/success" render={()=>
          <Success email={this.state.email}/>}  
        />
        <Route path="/history" render={()=>
          <History email={this.state.email}
          setEmail={this.setEmail}/>}  
        />
    </Switch>
    </div>
    </Router>
  )};
}

export default App;
