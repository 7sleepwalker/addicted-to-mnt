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


        // Render component for each child in structure.
        switch(structure[i].type) {
          case "date":
            inputs.push(<EditBox key={i} structure={structure[i]} data={data[i]} ref={i} name={i} match={this.props.match.url} changer={this._handleSubmit} /> );
            break;
          case "map-place":
            inputs.push(<EditBox key={i} structure={structure[i]} data={data[i]} ref={i} name={i} match={this.props.match.url} changer={this._handleSubmit} /> );
            break;
          case "short-text":
            inputs.push(<EditBox key={i} structure={structure[i]} data={data[i]} ref={i} name={i} match={this.props.match.url} changer={this._handleSubmit} /> );
            break;
          case "google-marker":
            inputs.push(<EditBox key={i} structure={structure[i]} data={data[i]} ref={i} name={i} match={this.props.match.url} changer={this._handleSubmit} /> );
            break;
          case "gallery":
            inputs.push(<EditBox key={i} structure={structure[i]} data={data[i]} ref={i} name={i} match={this.props.match.url} changer={this._handleSubmit} /> );
            break;
          case "list":
            inputs.push(<EditBox key={i} structure={structure[i]} data={data[i]} ref={i} name={i} match={this.props.match.url} changer={this._handleSubmit} /> );
            break;
          default:
            return "Missing component";
        }

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
