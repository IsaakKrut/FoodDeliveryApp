import React, { Component } from 'react';
import '../css/Checkout.css';

class Checkout extends Component {


    constructor(props){
        super(props);
        this.state = {
            email: '',
            empty: true,
        }
        this.emailChange = this.emailChange.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.emailInput = React.createRef();
    }


    componentDidMount(){
        
       
        if (this.props.items.length < 1){        
            this.setState({
                empty: true,
            })
        }
        else {
          this.setState({
              empty: false,
          })
        }
    }


    // This method is responsible for binding email input field
    // with the state value of this component
    emailChange(event){
        this.setState({
            email: event.target.value
        })
    }

    // This method validates email. Source:
    // https://www.w3resource.com/javascript/form/email-validation.php
    validateEmail() {
        var email = this.state.email
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat))
        {
        this.submitOrder();
        }
        else
        {
        alert("You have entered an invalid email address!");
        this.emailInput.current.focus();
        }
    }

    // This method submits the order and sends
    // an order object to a Spring Boot back-end server
    submitOrder(){
        console.log("order submitted for: " + this.state.email);

        // List of items sent to the server
        let orderItems = [];


        // convert current item array to a list of object being sent to the server
        // That object consists of an item id and quantity, which corresponds to an orderItem object in our database
        this.props.items.map(item=> orderItems.push({
            itemId: item.item.id,
            quantity: item.quantity
        }))


        // create an order object being sent to the server
        let order = {
            totalPrice: this.props.total,
            items: orderItems,
            email: this.state.email,
            orderDate: new Date()
        }

        // Post method sent to the server with order object as a parameter
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        };
        fetch('http://localhost:8080/api/orders', requestOptions)
            .then(response => response.json())
            .then(data => {
                 // After the transaction is approved resetting the state of our application
                // to handle a new order and send user to a confirmation page
                this.setState({
                    email: '',
                });
                this.props.emptyCart();
                this.props.setEmail(this.state.email);
                this.props.history.push("/success");
            })
            .catch(error => {
                // After the transaction is approved resetting the state of our application
                // to handle a new order and send user to an error page in case of unsuccessful order
                this.setState({
                    email: '',
                });
                this.props.emptyCart();
                this.props.setError(error.toString());
                this.props.history.push("/failure");
            });

       
    }



  render(){
      let container;     

      if (this.props.empty) {
          container = (<div> 
            <div className="text-center"> <p>Your cart is empty. Please, return to the <a href="/menu">Menu</a></p></div> 
            </div>);
        }   else{
            container = (<div>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map((item, i)=>(
                    <tr key = {i}>
                        <td>{item.item.name}</td>
                        <td>CA${(Math.round(item.item.price * 100) / 100).toFixed(2)}</td>
                        <td>{item.quantity}</td>
                        <td>CA${(Math.round(item.quantity * item.item.price * 100) / 100).toFixed(2)}</td>
                    </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>CA${(Math.round(this.props.total * 100) / 100).toFixed(2)}</td>
                    </tr>              
                </tbody>
                </table>
                <h4>HST: CA${(Math.round(this.props.total * 0.13 * 100) / 100).toFixed(2)} </h4>
                <h4>Your Total is CA${(Math.round(this.props.total * 1.13 * 100) / 100).toFixed(2)}</h4>
        </div>)
        }

  return (
      
    <div>
            <div>
        <div className="align-top top-cnt">
        <h1 className="text-center cart-label">Your Cart</h1>
            {container}
        </div>
        <form name="form">
        <div className="row text-right">
        <div className="col-5">
            <label htmlFor="exampleFormControlInput1">Enter Email to Submit Your Order</label>
            </div>
        <div className="form-group col-2">        
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" ref={this.emailInput} disabled={this.props.empty} onChange={this.emailChange}/>
        </div>
            <div className="col-2">
                <button type="button" className="btn btn-secondary btn-lg" disabled={this.props.empty} onClick={this.props.emptyCart}>Empty Cart</button>
            </div>
            <div className="col-1">
                <button type="button" className="btn btn-primary btn-lg" disabled={this.props.empty} onClick={this.validateEmail}>Checkout</button>
            </div>
        </div>
        </form>
      </div> 
    </div>
      
  )};


}
  

export default Checkout;