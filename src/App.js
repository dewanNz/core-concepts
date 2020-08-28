import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  const frnName = ['sumon', 'shohan'];
  const works= ['bussines', 'Police']
  const product = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'10.99'}
  ]
 
  return (
    <div className="App">
      <header className="App-header">

        <p>I am React Learner</p>
        {/* <Products name={product[0].name} price={product[0].price}> </Products>
        <Products name={product[1].name} price={product[1].price}> </Products> */}
        <Products product={product[0]}> </Products>
        <Products product={product[1]}> </Products>
        <Products product={product[2]}> </Products>


        <Person name="Shohag" job="Engineer"></Person>
        <Person name="shawon" job="Banker"></Person>
        <Person name={frnName[0]} job={works[0]}></Person>
        <Person name={frnName[1]} job={works[1]}></Person>


      </header>
    </div>
  );
}
function Person(props){
  
  const personStyle = {
    border: '5px solid cyan', 
    margin: '5px', 
    borderRadius: '10px',
    padding: '10px'
  }
  return (
    <div style={personStyle}>
      <h1> Name: {props.name}</h1>
      <h2>Job: {props.job}</h2>
    </div>
  );
}

function Products(props){
  const productStyle = {
    marginTop: '20px',
    border:"1px solid gray",
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return(
    <div style={productStyle}>
      <h3> {props.product.name} </h3>
      <h4>{props.product.price} </h4>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
