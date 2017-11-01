import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import propTypes from "prop-types";
import { connect } from 'react-redux';
import Card from "./Components/Card";


class DashboardContent extends Component {

  componentWillMount() {
    if (typeof(this.props.childNodes) !== "object") {
      this.props.match.url.replace("/dashboard/panel", "pageStructure");
    }

  }

  render() {

    let globalProps = this.props;
    let navKeys = this.props.childNodes;
    let cards = [];
    console.log((this.props));

    if (typeof(this.props.childNodes) === "object") {
      cards = navKeys.map((item, n) => {
        return <Card key={n} title={item} match={globalProps.match}/>;
      });

    } else if (this.props.childNodes === 1){
      cards = "#### LIST CARDS ####";

    } else if (this.props.childNodes === 0){
      cards = "#### CONTENT CARDS ####";
    }

    return (
      <section className="dashboard__content">
        {cards}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.dashboard.nav
  };
}

export default withRouter(connect(mapStateToProps)(DashboardContent));
