import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { default as Input } from './DashboardInput';

class DashboardContentEditor extends Component {

  _handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.props.match.url);
    console.log(this.refs);
  }

  render() {
    console.log(this.props);
    const pageTitle = this.props.match.url.split('/')[this.props.match.url.split('/').length -1];
    const data = this.props.content.data;
    let inputs = [];
    for (let i in data) {
      inputs.push(
        <div key={i}>
          <label className="contentEditor__label">
            <div>{i}:</div>
            <Input ref={i} value={data[i]} />
            {/*  <input className="contentEditor__input" ref={i} type='text' name={i} value={data[i]} placeholder='Type text...' />  */}
          </label>
        </div>
        );
    }


    return (
      <div className="dashboard__contentEditor">
        <h2> Content editor </h2>
        <h4> page: {pageTitle} </h4>
        <form onSubmit={(e) => this._handleSubmit(e)} className="contentEditor__form">
          {inputs}
          <input type="submit" className="btn btn-success" value="Submit" />
        </form>
      </div>
    );
  }
}

export default DashboardContentEditor;
