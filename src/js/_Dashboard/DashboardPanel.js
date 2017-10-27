import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import DashboardSidebar from './DashboardSidebar';

// import propTypes from "prop-types";
// import { connect } from 'react-redux';


class DashboardPanel extends Component {

  render() {
    return (
      <section className="dashboard__panel">
        <Route component={DashboardSidebar} />
        asd
      </section>
    );
  }
}

export default DashboardPanel;

// const mapStateToProps = (state) => {
//   return {
//     user: state.dashboard
//   };
// }

// DashboardPanel.contextTypes = {
//   router: propTypes.object
// };
//
// export default connect(mapStateToProps)(DashboardPanel);
