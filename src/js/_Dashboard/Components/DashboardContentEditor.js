import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { default as Input } from './DashboardInput';

class DashboardContentEditor extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(url, data) {
    this.props.submit(url, data);
  }

  render() {
    console.log(this.props);
    const pageTitle = this.props.match.url.split('/')[this.props.match.url.split('/').length -1];
    const data = this.props.content.data;
    let inputs = [];
    for (let i in data) {
      inputs.push(
        <div key={i}>
          <Input ref={i} name={i} data={data[i]} match={this.props.match.url} changer={this._handleSubmit} />
        </div>
        );
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
