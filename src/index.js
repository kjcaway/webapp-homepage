import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import {Left, Main} from './components';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div id="wrapper">
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
      <Left />
    </div>
  </Router>
  , document.getElementById('root')
);
// registerServiceWorker();
