import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// import propTypes from "prop-types";
import { connect } from 'react-redux';
import Card from "./Components/Card";


class DashboardContent extends Component {
  render() {

    let globalProps = this.props;
    let routes;
    let navKeys = [];
    let cards = [];
    console.log("#### BEFORE IF ####");
    console.log(this.props);

    if (this.props.childStructure !== undefined && this.props.childStructure !== 0) {
      console.log("#### IF ####");
      console.log(this.props);
      navKeys = Object.keys(this.props.childStructure);
      routes = navKeys.map((item, n) => {
        console.log(`${globalProps.match.url}/${item}`);
        return <Route key={n} path={`${globalProps.match.url}/${item}`}  render={(props) => <DashboardContent match={props.match} childStructure={globalProps.childStructure[item]} /> } />;
      });
      cards = navKeys.map((item, n) => {
        return <Card key={n} title={item} match={globalProps.match}/>;
      });
    } else {
      // Renderuj cardy dla zmiany contentu

      console.log("#### ELSE ####");
      console.log(this.props);

    }

    return (
      <section className="dashboard__content">
        Content WTF
        {cards}

          {console.log("routes")}
          {console.log(routes)}
          {routes}
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

export default withRouter(connect(mapStateToProps)(DashboardContent));
