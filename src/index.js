import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './files/css/font-awesome.min.css';
import './files/scss/main.scss';
import './files/css/index.css';

import './files/js/util.js';
import './files/js/main.js';

import {Left, Main, About, Login} from './components';

ReactDOM.render(
  <Router>
    <div id="wrapper">
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
      </Switch>
      <Left />
    </div>
  </Router>
  , document.getElementById('root')
);
