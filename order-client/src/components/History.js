import React, { Component } from 'react';

class History extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            orders: []
          }

        this.onSubmit = this.onSubmit.bind(this);
        this.emailChange = this.emailChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            email: this.props.email
        })
        if (this.props.email!== ''){
            fetch("http://localhost:8080/api/orders?email=" +this.state.email)
            .then(data=>{ return data.json();})
            .then(data=>{
            this.setState({orders : data});
            } );
        }
    }

    emailChange(event){
        this.setState({
            email: event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        var email = this.state.email;
        var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat))
        {
            this.props.setEmail(email);
            if (email!== ''){
                fetch("http://localhost:8080/api/orders?email=" +email)
                .then(data=>{ return data.json();})
                .then(data=>{
                this.setState({orders : data});
                } );
                console.log(this.state.orders);
            }
        }
        else
            {
            alert("You have entered an invalid email address!");
            }
    }


  render(){
      let container = '';

    if (this.props.email!== ''){
        container = (<ul>
            { this.state.orders.map((order) => (
                <div key={order.id}>
                      <li className="list-group-item">
                          {order.orderDate}
                        <ol>
                            {order.items.map((item) => (
                                <li>{item.quantity} * {item.itemId}</li>
                            ))}
                        </ol>
                        Total: {order.totalPrice}
                      </li>                   
                </div>
            ))}
        </ul>);}
    else 
    container = (<div><h3>Email is empty</h3></div>);
    
     return(
        <div>
        <div >
        <h1 className="text-center cart-label">Order History</h1>
            {container}
        </div>
        <form name="form" className="email-form">
        <div className="row text-right">
        <div className="col-5">
            <label htmlFor="exampleFormControlInput1">Enter Email to View your Order History</label>
            </div>
        <div className="form-group col-2">        
            <input type="email" className="form-control" id="exampleFormControlInput1" onChange={this.emailChange} defaultValue={this.props.email}  placeholder="name@example.com" ref={this.emailInput}/>
        </div>
            <div className="col-1">
                <button type="button" className="btn btn-primary btn-lg" onClick={this.onSubmit} disabled={this.state.email===''}>Submit</button>
            </div>
        </div>
        </form>
        </div>

    )};

}

export default History;