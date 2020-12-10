import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppWrapper from './AppWrapper.js';
import NotFound from './pages/NotFound.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Home from './pages/Home.js';
import Team from './pages/Team.js';
import Docs from './pages/Docs.js';
import Navigation from './shared/Navigation.js';

const Router = (props) => {
  return (
    <BrowserRouter>
      <Navigation loggedIn={props.loggedIn} logout={props.logout}/>
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route exact path="/app" render={() => <AppWrapper 
                                                loggedIn={props.loggedIn}
                                                user={props.user}
                                              />} 
                                              />
        <Route exact path="/login" render={() => <Login login={props.login}/> } />
        <Route exact path="/signup" render={() => <Signup login={props.login}/> } />
        <Route exact path="/team" component={Team} />
        <Route exact path="/docs" component={Docs} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
  

export default Router;