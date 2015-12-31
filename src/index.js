import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import Main from 'components/main'
import Example from 'components/example'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import App from 'containers/App'

const store = configureStore({name: ''});
const routes = (
  <Router>
    <Route path="/" component={Main}/>
    <Route path="example" component={Example}/>
  </Router>
);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('content'));