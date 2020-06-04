import React, { Component } from 'react';
import '../css/Menu.css';

class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
            categories:  [],
            items: [],
            loading: true
    }
}




    componentDidMount(){
        fetch("http://localhost:8080/api/categories")
        .then(data=>{ return data.json();})
        .then(data=>{
          this.setState({categories : data});
        } );

        fetch("http://localhost:8080/api/items")
        .then(data=>{ return data.json();})
        .then(data=>{
          this.setState({items : data});
        } );
        this.setState({
          loading: false
        })
        
      }

  render(){

  //   let filtereditems = this.state.items.filter(item => item.category_id === '3');
   // console.log(filtereditems.length);
   let categories = this.state.categories;

   if (!this.state.loading){
    this.state.categories.forEach(category=>{
     let itemArray = [];
     this.state.items.forEach(item => {
      if (category.id === item.category_id)  {
        itemArray.push(item);
      }     
      })
      category.items = itemArray;
      categories[category.id-1] = category;
     })
   }
    


  return (
    <div> 
        <div>
            { categories.map((category) => (
                <div key={category.id}>
                 <h3 className="text-center">{category.name}</h3>
                <ul className="list-group">
                    {category.items.map(item =>(
                      <li className="list-group-item" key={item.id}>
                        <form>
                      <div className="row">
                      <div className="col-4 text-left">{item.name}</div> 
                      <div className="col-1 text-left">CA${(Math.round(item.price * 100) / 100).toFixed(2)}</div> 
                      <label className="font-italic col-2" htmlFor={item.id}>Quantity</label>
                      <div className="form-group width60">                 
                          <select className="form-control"id={item.id}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>                    
                       </div>
                      <div className="col-3"><button type="button" className="btn btn-primary btn-lg" onClick={()=>this.props.addToCart(item, document.getElementById(item.id).value)}>Add to cart</button></div>
                      </div>
                      </form>
                      </li>
                   
                    ))}
                </ul>
                </div>
            ))}
        </div>
    </div>
  )};
}

export default Menu;