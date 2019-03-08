import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Math from './Math';
import Game from './Game';
import * as serviceWorker from './serviceWorker';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom'
const routing = (
    //Handling the routes and rendering the components as required
    <Router>
      <div>
          <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Math" component={Math} />
        <Route exact path="/Game" component={Game} />
        </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
