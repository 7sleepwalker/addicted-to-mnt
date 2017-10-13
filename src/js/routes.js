import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

  import HomePage from './Containers/HomePage';
  import Error404 from './Containers/error404';
import App from './Containers/App';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={(props) => <HomePage content={this.props.content} />}  />
        <Route path="/404" render={(props) => <Error404 content={this.props.content.Error404} />} />
        <Route path="/App" render={(props) => <App content={this.props.content.Blog} />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
