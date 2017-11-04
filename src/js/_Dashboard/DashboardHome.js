import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import propTypes from "prop-types";
// import { connect } from 'react-redux';


class DashboardHome extends Component {

  render() {
    console.log("RENDER HOME");
    return (
      <section className="dashboard__home">
        Welcome in dashboard
      </section>
    );
  }
}

export default DashboardHome;
