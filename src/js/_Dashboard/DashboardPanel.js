import React, { Component } from 'react';
import { Route, Switch, withRouter  } from 'react-router-dom';
import propTypes from "prop-types";
import { connect } from 'react-redux';

import { getStructure } from '../Actions/dashboardActions';

import DashboardSidebar from './DashboardSidebar';
import DashboardHome from './DashboardHome';
import DashboardContent from './DashboardContent';


class DashboardPanel extends Component {

  componentWillMount() {
    this.props.dispatch(getStructure());
  }

  render() {

    function process(path) {
      navKeys.push(path);
    }

    function traverse(path = '', o, func) {
    	let pathN = path;
      for (var i in o) {
    		func.apply(this,[pathN + '/' + i]);
        if (o[i] !== null && typeof(o[i]) === "object") {
    			path +=  '/' + i;
        	traverse(path, o[i], func);
        }
      }
    }

    let globalProps = this.props;
    let routes;
    let navKeys = [];
    traverse('', this.props.nav, process);
    if (navKeys.length > 0) {
      routes = navKeys.map((item, n) => {
        return <Route key={n} path={`/dashboard/panel${item}`} render={(props) => <DashboardContent match={props.match} pathStructure={item} /> } />;
      });
    }

    return (
      <section className="dashboard__panel">
      <Route render={(props) => <DashboardSidebar match={props.match} nav={globalProps.nav} /> } />
        <Route exact path="/dashboard/panel" component={DashboardHome} />
        <Switch>
          {routes}
        </Switch>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.dashboard.nav
  };
}

DashboardPanel.contextTypes = {
  router: propTypes.object,
  store: propTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps)(DashboardPanel));
