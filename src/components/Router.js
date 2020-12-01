import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import App from './App.js';
import AppWrapper from './AppWrapper.js';
import NotFound from './pages/NotFound.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Navigation from './shared/Navigation.js';

const Router = () => (
  <BrowserRouter>
    <Navigation/>
    <Switch>
      {/* <Route exact path="/" component={Home}/> */}
      <Route path="/app" component={AppWrapper}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;