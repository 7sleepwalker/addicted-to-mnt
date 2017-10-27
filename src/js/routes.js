import React from 'react';
// import propTypes from "prop-types";

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './Containers/HomePage';
import Error404 from './Containers/error404';
import App from './Containers/App';
import About from './Containers/About';
import Gallery from './Containers/Gallery';

import Dashboard from './_Dashboard/DashboardLogIn';
import DashboardPanel from './_Dashboard/DashboardPanel';

export const Routes  = (store) => {
  const authRequired = (state) => {
    const user = store.store.getState().dashboard.user;
    if (!user) {
      return true;
    } else {
      state.history.push('/404');
    }

    // user ? (
    //   return <Redirect to={state.match.path} /> ;
    // ) : (
    //   return <Redirect to="/404" />;
    // );

  };

  return (
    <BrowserRouter>
      <Switch>
      <Route path="/Dashboard" exact component={Dashboard} />
      <Route path="/Dashboard/Panel" render={(props) => {authRequired(props); return <DashboardPanel />;}} />

        <Route path="/" exact render={(props) => <HomePage />}  />
        <Route path="/404" render={(props) => <Error404 />} />
        <Route path="/App" render={(props) => <App />} />
        <Route path="/About" render={(props) => <About />} />
        <Route path="/BlogGallery/:id" render={(props) => <Gallery match={props.match}/> }   />
      </Switch>
    </BrowserRouter>
  );
}

//
// Routes.contextTypes = {
//   router: propTypes.object
// };
