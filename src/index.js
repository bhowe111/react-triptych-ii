import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);
