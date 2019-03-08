import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {result :''};
 // Storing current user's visits into his local browser storage and updating it as required   
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
 }
}
// Getting list of all users visited in the component did mount , so that all the users for the application will be displayed
componentDidMount() {
  fetch('https://mysterious-waters-43598.herokuapp.com/')
  .then(response => response.json())
  .then(data =>this.setState({result:data.result})) 
}
 //Fetching and rendering the current user visit count from local browser
 //Fetching the total visit count from the updated state 
  render() {
    return (
      <div className="App" >
        <h4>Welcome user!, here are some interesting facts</h4>
       <h5> You visited the webpage <span style={{'fontSize':'16px','fontWeight':'bold','color':'green'}}> {localStorage.clickcount}</span> times</h5>
       <h5> Total visits by all the users <span style={{'fontSize':'16px','fontWeight':'bold','color':'green'}}>{this.state.result}</span> times</h5>
      </div>
    );
  }
}

export default App;
