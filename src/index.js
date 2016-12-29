import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './component/App';
import Home from './component/Home';
import Post from './component/Post';
import { Router,Route,IndexRoute,browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/posts/:postId' component={Post} />
      </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('app'));
