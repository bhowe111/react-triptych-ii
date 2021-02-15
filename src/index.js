import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Router>,
  document.getElementById('root')
);
