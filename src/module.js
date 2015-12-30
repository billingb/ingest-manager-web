import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import Main from 'components/main'
import Example from 'components/example'

ReactDOM.render((
  <Router>
    <Route path="/" component={Main}/>
    <Route path="example" component={Example}/>
  </Router>
), document.getElementById('content'));