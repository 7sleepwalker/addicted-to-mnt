import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { default as EditBox } from './DashboardEditBox';

class DashboardContentEditor extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(url, data) {
    this.props.submit(url, data);
  }

  render() {

    console.log("RENDER EDITOR");
    console.log(this.props);
    const pageTitle = this.props.match.url.split('/')[this.props.match.url.split('/').length -1];
    const data = this.props.content.data;
    const structure = this.props.structure;
    let inputs = [];
    for (let i in structure) {
      if (i !== "structure") {
        inputs.push(
          <EditBox key={i} data={data[i]} ref={i} name={i} data={data[i]} match={this.props.match.url} changer={this._handleSubmit} />
          );
      }
    }


    return (
      <div className="dashboard__contentEditor">
        <h2> Content editor </h2>
        <h4> page: {pageTitle} </h4>
        <div className="contentEditor__form">
          {inputs}
        </div>
      </div>
    );
  }
}

export default DashboardContentEditor;
