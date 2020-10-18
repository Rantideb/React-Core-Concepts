import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name: "Mahfuz Rahman",
    job: "Singer"
  }
  const persons = ['Jhankar Mahbub', 'Rezaul Karim']
  const products = [{name: 'Photoshop', price: '$99'},
                    {name: 'Illustrator', price: '$156'}    
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react paragraph</p>
        <h1>{person.name} is a {person.job}</h1>
        <p>{2 + 3}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Product name={products[0].name} price={products[0].price}></Product>
        {/* //Passing Full Object */}
        <Product1 product= {products[1]}></Product1>



        <Person2></Person2>
        <Person2></Person2>
        <Person3></Person3>
        <Person4 name="Jhankar Mahbub" slogan="JavaScript Boss"></Person4>
        <Person5 name={persons[1]} slogan="Ke tumi "></Person5>
        <Product2 product= {products[0]}></Product2>

        


      </header>
    </div>
  );
}


// In line 
function Person2() {
  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <h1>Name: Shakib AL Hasan</h1>
      <h3>Player of the Year</h3></div>
  )

}
// Style in a function
function Person3() {
  const Person3Style ={
    border: '2px solid green',
    margin: '10px'

  }

  return(
    <div style= {Person3Style}>
    <h1 >Name: Mashrafee Bin Murtoza</h1>
    <h3>Bangladesh Captain</h3>
  </div>
  )

  
  
}

// Compnent 
const Person3Style ={
  border: '2px solid green',
  margin: '10px'

}

function Person4(props) {
  

  return(
    <div style= {Person3Style}>
    <h1 >Name: {props.name}</h1>
    <h3>{props.slogan}</h3>
  </div>
  )
  
}

function Person5(props) {
  

  return(
    <div style= {Person3Style}>
    <h1 >Name: {props.name}</h1>
    <h3>{props.slogan}</h3>
  </div>
  )
  
}


// Product

const ProductStyle= {
  border:'1px solid gray',
  borderRadiuss: '5px',
  backgroundColor: 'lightgray',
  width: '200px',
  height: '300px',
  float: 'left',
  margin: '10px'

}

function Product(props) {
  return(
    <div style= {ProductStyle}>
      <h2>Name: {props.name}</h2>
      <h4>{props.price}</h4>
      <button>Buy Now</button>
      
    </div>
  )
}

function Product1(props) {
  return(
    <div style= {ProductStyle}>
      <h2>Name: {props.product.name}</h2>
      <h4>{props.product.price}</h4>
      <button>Buy Now</button>
      
    </div>
  )
}


// Destructure 



function Product2(props) {
  const {name, price} = props.product;
  return(
    <div style= {ProductStyle}>
      <h2>Name: {name}</h2>
      <h4>{price}</h4>
      <button>Buy Now</button>
      
    </div>
  )
}

export default App;
