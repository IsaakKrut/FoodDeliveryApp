import React, { Component } from 'react';
import '../css/Checkout.css';

class Checkout extends Component {


    constructor(props){
        super(props);
        this.state = {
            email: '',
            emailAfter: '',
            empty: true,
            orderPlaced: false
        }
        this.emailChange = this.emailChange.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
    }


    componentDidMount(){
        if (this.props.items.length < 1){
            this.setState({
                empty: true,
            })
        }
        else {
          this.setState({
              empty: false
          })
        }
    }

    emailChange(event){
        this.setState({
            email: event.target.value
        })
    }

    submitOrder(){
        console.log("order submitted for: " + this.state.email);
        let orderItems = [];

        this.props.items.map(item=> orderItems.push({
            itemId: item.item.id,
            quantity: item.quantity
        }))

        let order = {
            totalPrice: this.props.total,
            items: orderItems,
            email: this.state.email,
            orderDate: new Date()
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        };
        fetch('http://localhost:8080/api/orders', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));


            this.setState({
                orderPlaced: true,
                emailAfter: this.state.email,
                email: '',
            });
            this.props.emptyCart();
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

        let orderPlaced = this.state.orderPlaced;
  return (
      
    <div>
        {orderPlaced ?  <div>
                <h4>Your order have been placed. Receipt have been sent to {this.state.emailAfter}</h4>
            </div> :
            <div>
        <div className="align-top top-cnt">
        <h1 className="text-center cart-label">Your Cart</h1>
            {container}
        </div>
        <form>
        <div className="row text-right">
        <div className="col-5">
            <label htmlFor="exampleFormControlInput1">Enter Email to Submit Your Order</label>
            </div>
        <div className="form-group col-2">        
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" disabled={this.props.empty} onChange={this.emailChange}/>
        </div>
            <div className="col-2">
                <button type="button" className="btn btn-secondary btn-lg" disabled={this.props.empty} onClick={this.props.emptyCart}>Empty Cart</button>
            </div>
            <div className="col-1">
                <button type="button" className="btn btn-primary btn-lg" disabled={this.state.email === ''} onClick={this.submitOrder}>Checkout</button>
            </div>
        </div>
        </form>
      </div> 
  }
    </div>
      
  )};


}
  

export default Checkout;