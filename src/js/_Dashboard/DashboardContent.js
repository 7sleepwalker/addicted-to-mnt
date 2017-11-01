import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import propTypes from "prop-types";
import { connect } from 'react-redux';
import Card from "./Components/Card";
import { getDataByStructure } from "../Actions/dashboardActions";


class DashboardContent extends Component {

  componentWillMount() {
    if (typeof(this.props.childNodes) !== "object") {
      this.props.dispatch(getDataByStructure(this.props.match.url.replace("/dashboard/panel", "")));
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
      let post = this.props.posts;
      cards.push(<Card key={-1} title="Add new post"  addCard />);
      for (let i in post) {
        cards.push(<Card key={i} title={post[i].title} match={globalProps.match} content={post[i]} editCard/>)
      }

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
    posts: state.dashboard.data
  };
}

export default withRouter(connect(mapStateToProps)(DashboardContent));
