import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './files/css/index.css';
import './files/scss/_menu.scss';

import {Left, Main, About} from './components';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div id="wrapper">
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/about" component={About}/>
      </Switch>
      <Left />
    </div>
  </Router>
  , document.getElementById('root')
);
// registerServiceWorker();
