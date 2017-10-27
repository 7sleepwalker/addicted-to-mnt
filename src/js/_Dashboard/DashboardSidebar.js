import React, { Component } from 'react';


// import propTypes from "prop-types";
// import { connect } from 'react-redux';


class DashboardPanel extends Component {
  render() {
    return (
      <aside className="dashboard__sideBar">
        <h2 className="sideBar__title"> Dashboard </h2>
        <hr className="sideBar__separator" />
          
      </aside>
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
