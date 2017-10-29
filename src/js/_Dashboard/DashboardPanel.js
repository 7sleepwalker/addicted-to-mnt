import React, { Component } from 'react';
import { Route, Switch, withRouter  } from 'react-router-dom';
import propTypes from "prop-types";
import { connect } from 'react-redux';

import { getStructure } from '../Actions/dashboardActions';

import DashboardSidebar from './DashboardSidebar';
import DashboardHome from './DashboardHome';
import DashboardContent from './DashboardContent';



// import propTypes from "prop-types";
// import { connect } from 'react-redux';


class DashboardPanel extends Component {

  componentWillMount() {
    this.props.dispatch(getStructure());
  }

  render() {

    let globalProps = this.props;
    let routes;
    let navKeys = [];
    if (this.props.nav !== undefined) {
      navKeys = Object.keys(this.props.nav);
      routes =navKeys.map((item, n) => {
        return <Route key={n} path={`/dashboard/panel/${item}`} render={(props) => <DashboardContent match={props.match} childStructure={globalProps.nav[item]} /> } />;
      });
    }

    return (
      <section className="dashboard__panel">
      <Route render={(props) => <DashboardSidebar match={props.match} nav={navKeys} /> } />
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
  router: propTypes.object
};

export default withRouter(connect(mapStateToProps)(DashboardPanel));
