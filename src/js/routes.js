import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './Containers/HomePage';
import Error404 from './Containers/error404';
import App from './Containers/App';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/404" component={Error404} />
        <Route path="/App" component={App} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
