import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import propTypes from "prop-types";
import { connect } from 'react-redux';
import Card from "./Components/Card";
import {default as Editor} from "./Components/DashboardContentEditor"
import { getDataByStructure, updateData } from "../Actions/dashboardActions";


class DashboardContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isFetched: true
    };
  }

  componentWillMount() {
    if (typeof(this.props.childNodes) !== "object") {
      let dispatchData = getDataByStructure(this.props.match.url.replace("/dashboard/panel", ""));
      this.props.dispatch(dispatchData);
    }
  }

  _handleSubmit(url, data) {
    url = url.replace("/dashboard/panel", "");
    this.props.dispatch(updateData(`${url}/`, data));
  }


  render() {
    if (!this.props.content.data)
      return (<div className="addictiv_isLoading"> Content is loading </div>);

    let globalProps = this.props;
    let navKeys = this.props.childNodes;
    let cards = [];

    if (typeof(this.props.childNodes) === "object") {
      cards = navKeys.map((item, n) => {
        return <Card key={n} title={item} match={globalProps.match}/>;
      });

    } else if (this.props.childNodes === 1){
      let post = this.props.content.data;
      cards.push(<Card key={-1} title="Add new post"  addCard />);
      for (let i in post) {
        cards.push(<Card key={i} title={post[i].title} match={globalProps.match} content={post[i]} editCard/>)
      }

    } else if (this.props.childNodes === 0){
      cards = <Editor content={this.props.content} submit={this._handleSubmit.bind(this)} match={globalProps.match} />;
    }

    return (
      <div className="dashboard__content">
        {cards}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.dashboard
  };
}

export default withRouter(connect(mapStateToProps)(DashboardContent));
