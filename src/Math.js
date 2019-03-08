import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
var numberFieldStyling= {
  width: '20%',
  padding: '12px 20px',
  margin: '40px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  display: 'inherit',
  marginLeft: '40%',
}

var buttonStyling={
  
    width: '10%',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin:'80px' 
}

var leftMargin={
  marginLeft: '10% !important'
}
class Math extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value1: '',
                  value2: '',
                  result :''};
    this.handleChangeFirstInput = this.handleChangeFirstInput.bind(this);
    this.handleChangeSecondInput = this.handleChangeSecondInput.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleSubstraction = this.handleSubstraction.bind(this);
    this.handleMultiplication = this.handleMultiplication.bind(this);
    this.handleDivision = this.handleDivision.bind(this);
  }
  handleChangeFirstInput(event) {
    this.setState({value1: event.target.value});
  }
  handleChangeSecondInput(event) {
    this.setState({value2: event.target.value});
  }
  handleAddition(){
    let params = {
      "value1": this.state.value1,
      "value2": this.state.value2
    }
    
    let query = Object.keys(params)
                 .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                 .join('&');
    fetch('https://mysterious-waters-43598.herokuapp.com/add?' + query)
      .then(response => response.json())
      .then(data => this.setState({result:data.result}))
  }
  handleSubstraction(){
    let params = {
      "value1": this.state.value1,
      "value2": this.state.value2
    }
    
    let query = Object.keys(params)
                 .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                 .join('&');
    fetch('https://mysterious-waters-43598.herokuapp.com/sub?' + query)
      .then(response => response.json())
      .then(data => this.setState({result:data.result}))
  }
  handleMultiplication(){
    let params = {
      "value1": this.state.value1,
      "value2": this.state.value2
      
    }
    
    let query = Object.keys(params)
                 .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                 .join('&');
    fetch('https://mysterious-waters-43598.herokuapp.com/mul?' + query)
      .then(response => response.json())
      .then(data => this.setState({result:data.result}))
  }
  handleDivision(){
    let params = {
      "value1": this.state.value1,
      "value2": this.state.value2
    }
    if(this.state.value2=='0')
    alert('Please make sure you enter valid numbers')
    else
    {
    let query = Object.keys(params)
                 .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                 .join('&');
    fetch('https://mysterious-waters-43598.herokuapp.com/div?' + query)
      .then(response => response.json())
      .then(data =>this.setState({result:data.result})) 
    }
  }
  render() {
    return (
      <div className="Math">
          <p style={{'color':'orange','marginLeft':'36%'}}> Module to handle basic mathematical operations( using REST API)</p>
          <input type="number" placeholder={'Please enter value for operator 1'} style={numberFieldStyling} value={this.state.value1} onChange={this.handleChangeFirstInput} />
      
     
          <input type="number"  placeholder={'Please enter value for operator 2'} style={numberFieldStyling}  value={this.state.value2} onChange={this.handleChangeSecondInput} />
        
        <input type="button" value="Add" style={buttonStyling} onClick={this.handleAddition}/>
        <input type="button" value="Subtract" style={buttonStyling} onClick={this.handleSubstraction}/>
        <input type="button" value="Multiply" style={buttonStyling} onClick={this.handleMultiplication}/>
        <input type="button" value="Divide" style={buttonStyling} onClick={this.handleDivision}/>

        <p>The operation result is :<span style={{'fontSize':'16px','fontWeight':'bold','color':'green'}}> {this.state.result}</span></p>
        
      </div>
    );
  }
}

export default Math;
