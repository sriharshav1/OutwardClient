import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Math from './Math';
import Game from './Game';
import * as serviceWorker from './serviceWorker';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom'
const routing = (
    
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
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
