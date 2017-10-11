import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './App';
import Error404 from './error404';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/404" component={Error404} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
