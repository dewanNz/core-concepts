import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  const frnName = ['sumon', 'shohan', 'shojib','rony', 'jony', 'kollan', 'kishor', 'motin'];
  const myFriends = [{name:'sumon', job:'engineer'}, 
                    {name:'shohan', job:'engineer'}, 
                    {name:'shojib', job:'engineer'},
                    {name:'rony', job:'engineer'}, 
                    {name:'jony', job:'engineer'}, 
                    {name:'kollan', job:'engineer'}, 
                    {name:'kishor',job:'engineer'}, 
                    {name:'motin', job:'engineer'}]
  // const works= ['bussines', 'Police']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'10.99'},
    {name:'Premier El', price:'260.99'}

  ]
  
  // const productNames = products.map(product => product.name);
  // console.log(productNames);
  const friends = frnName.map(friend => friend)
  console.log(friends);

  return (
    <div className="App">
      <header className="App-header">
        
        <Counter></Counter>
        <p>I am React Learner</p>
        <ul>
          <li>{friends[0]}</li>
          <li>{friends[1]}</li>
          <li>{friends[2]}</li>
          <li>{friends[3]}</li>
        </ul>
        <ul>
          {friends.map(friend => <li>{friend}</li>)}
          {products.map(pd => <li>{pd.name}</li>)}
        </ul>
        {/* <Products name={product[0].name} price={product[0].price}> </Products>
        <Products name={product[1].name} price={product[1].price}> </Products> */}
        {/* <Products product={products[0]}> </Products>
        <Products product={products[1]}> </Products>
        <Products product={products[2]}> </Products> */}
       
        { products.map(pdt => <Products product = {pdt}></Products>)}

        {/* <Person name="Sho" job="Engineer"></Person>
        <Person name="shawon" job="Banker"></Person>
        <Person name={frnName[0]} job={works[0]}></Person>
        <Person name={frnName[1]} job={works[1]}></Person> */}

        {myFriends.map(frnd => <Person friend = {frnd}></Person>)}

        <Users></Users>
        <Posts></Posts>
      

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
      <h1> Name: {props.friend.name}</h1>
      <h2>Job: {props.friend.job}</h2>
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

function Counter(){
  const [count, setCount]= useState(10);
  // const handleIncrease = () => console.log('Clicked');
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //    setCount(newCount);
  // }
  // const handleIncrease = () => setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      {/* <button onClick = {handleIncrease}>Increase</button> */}
      <button onClick = {() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('calling effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      {/* {console.log(users)} */}
      <ul>
        {users.map( user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}


function Posts(){
  const [post, setPost] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data));
  },[])
  return(
    <div>
      <h2>Dynamic Posts:{post.length}</h2>
      <ul>
        {post.map(posts => <li>{posts.title}</li>)}
      </ul>

    </div>
  )
}
export default App;
