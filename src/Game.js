import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//Particles library is imported and initiated
//Ref: https://www.npmjs.com/package/react-particles-js
import Particles from 'react-particles-js';

class Game extends Component {
  render(){
    return (
      <div>
        <h4><span style={{'fontSize':'16px','fontWeight':'bold','color':'green','marginLeft':'30%'}}> {'Hover over lines to see particle animation in action'}</span></h4>
      <Particles style={{"background":'black'}}
      //Setting up the params as desired
      params={{
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }} />
    </div>
    );
};
  }


export default Game;
