import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Gallery from '../components/Gallery';
import NotFoundPage from '../components/NotFoundPage';
import About from '../components/About';
import UploadForm from '../components/UploadForm';

const AppRouter = () => (
  <BrowserRouter>
    <div className="main-content">
      <Switch>
        <Route component={HomePage} path="/" exact={true} />
        <Route component={Gallery} path="/gallery" />
        <Route component={About} path="/about" />
        <Route component={UploadForm} path="/upload" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
