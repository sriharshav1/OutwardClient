import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Particles from 'react-particles-js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {result :''};
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
 }
}
componentDidMount() {
  fetch('https://mysterious-waters-43598.herokuapp.com/')
  .then(response => response.json())
  .then(data =>this.setState({result:data.result})) 
}
  
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
