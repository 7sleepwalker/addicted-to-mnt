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
        <Route path="/" exact render={(props) => <HomePage store={this.props.store} content={this.props.content} />}  />
        <Route path="/404" render={(props) => <Error404 store={this.props.store} content={this.props.content.Error404} />} />
        <Route path="/App" render={(props) => <App store={this.props.store} content={this.props.content.Blog} />} />
        <Route path="/About" render={(props) => <About store={this.props.store} content={this.props.content.About} />} />
        <Route path="/Dashboard" render={(props) => <Dashboard store={this.props.store} />} />
        <Route path="/Blog/:id" render={(props) => <Gallery content={this.props} store={this.props.store} match={props.match}/> }  />
        <Route path="/Blog/Gallery/:id" component={Gallery}  />
      </Switch>
    );
  }
}

export default Routes;
