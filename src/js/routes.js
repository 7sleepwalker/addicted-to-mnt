import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './Containers/HomePage';
import Error404 from './Containers/error404';
import App from './Containers/App';
import About from './Containers/About';
import Gallery from './Containers/Gallery';

import Dashboard from './_Dashboard/DashboardLogIn';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={(props) => <HomePage content={this.props.content} />}  />
        <Route path="/404" render={(props) => <Error404 content={this.props.content.Error404} />} />
        <Route path="/App" render={(props) => <App content={this.props.content.Blog} />} />
        <Route path="/About" render={(props) => <About content={this.props.content.About} />} />
        <Route path="/Dashboard" render={(props) => <Dashboard />} />
        <Route path="/Blog/:id" component={Gallery}  />
        <Route path="/Blog/Gallery/:id" component={Gallery}  />
      </Switch>
    );
  }
}

export default Routes;
