import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import propTypes from "prop-types";
import { connect } from 'react-redux';

import { getNav } from '../Actions/dashboardActions';

import DashboardSidebar from './DashboardSidebar';
import DashboardHome from './DashboardHome';


// import propTypes from "prop-types";
// import { connect } from 'react-redux';


class DashboardPanel extends Component {

  componentWillMount() {
    this.props.dispatch(getNav());
  }

  render() {

    let routes;
    if (this.props.nav) {
      routes = this.props.nav.map((item, n) => {
        return <Route key={n} path={`/dashboard/panel/${item}`} exact component={DashboardHome} />;
      });
    }

    return (
      <section className="dashboard__panel">
        <Route component={DashboardSidebar} />
        <Route path="/dashboard/panel" exact component={DashboardHome} />
        {routes}
        {/*render={(props) => <Gallery match={props.match}/>*/}
        asd
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

export default connect(mapStateToProps)(DashboardPanel);
