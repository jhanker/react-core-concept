import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks= ['anower', 'jafor', 'alamgir', 'salman', 'appi', 'shuvo']
   const products =[{name: 'photoshop', price: '$99.99'},
  {name: 'illustrator', price: '60.99'},
  {name: 'pdf reader', price: '$6.99'}, 
  {name: 'premiere el', price: '$249.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">
       <p>i am a react person</p>
       <Counter></Counter>
       <Users></Users>
       <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
         {
           products.map(product=><li>{product.name}</li>)
         }
         <li>{nayoks[0]} </li>
         <li> {nayoks[1]} </li>
         <li> {nayoks[2]}  </li>    
         <li> {nayoks[3]} </li>      
      
       </ul>
       {
       products.map(product =><Product product={product}></Product>)
       }
       <Product product={products[0]} ></Product>
       <Product product={products[1]}></Product>
       <Person name= 'munna' job='football'> </Person>
       <Person name= 'masum' job='dorshok'> </Person>
      
      
   
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
    
  

  return(
    <div> 
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count - 1)}>decrease</button>
     <button onClick={ () => setCount(count + 1)}>increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res => res.json())
 .then(data => setUsers(data));
  }
  )

  
  return(
    <div>
      <h3>dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'

    
    

  }
  const {name, price} = props.product;
 
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border: "2px solid gold", width: '400px'}}>
      <h3> my name: {props.name}</h3>
      <p>my profession: {props.job}</p>

    
    </div>

  )

}


export default App;
