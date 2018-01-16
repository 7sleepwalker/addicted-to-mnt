import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { default as EditBox } from './DashboardEditBox';
import TextInput from "./Inputs/DashboardTextInput";
import DateInput from "./Inputs/DashboardDateInput";
import MapStages from "./Inputs/DashboardMapStages";

class DashboardContentEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submited: false
    };
    this.data = [];
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFormData = this._handleFormData.bind(this);
  }

  _handleSubmit(url, data) {
    this.props.submit(url, data);
  }

  _handleFormData(id, label, data) {
    // path example : 1
    // data example : { title: "Moutains" }
    // expected result : this.data = [ 1: { title: "Moutains" } ]
    // expected next result : this.data = [ 1: { title: "Moutains", date: "11.10" } ]
    let tmpData = this.data[id];
    tmpData[label] = data;
  }

  render() {
    console.log("RENDER EDITOR");
    const pageTitle = this.props.match.url.split('/')[this.props.match.url.split('/').length -1];
    const data = this.props.content.data;
    const structure = this.props.structure;
    let inputs = [];

    for (let i in structure) {
      if (i !== "structure") {
<<<<<<< HEAD
        // Render component for each child in structure.
        switch(structure[i].type) {
          case "date":
            inputs.push(
              <EditBox key={i} structure={structure[i]} data={data[i]} ref={i} name={i} match={this.props.match.url} changer={this._handleSubmit} >
                <DateInput id={`input-${i}`} group={i} submit={this.state.submited} description={structure[i].description} date={data[i]} submitData={this._handleFormData} />
              </EditBox>
            );
            break;
          case "map-place":
            inputs.push(
              <EditBox key={i} structure={structure[i]} data={data[i]} ref={i} name={i} match={this.props.match.url} changer={this._handleSubmit} >
                <MapStages id={`input-${i}`} group={i} structure={structure[i]} content={data[i]} submit={this.state.submited} submitData={this._handleFormData}/>
              </EditBox>
            );
            break;
          case "short-text":
            inputs.push(
              <EditBox key={i} structure={structure[i]} data={data[i]} ref={i} name={i} match={this.props.match.url} changer={this._handleSubmit} >
                <TextInput id={`input-${i}`} group={i} submit={this.state.submited} value={data[i]} description={structure[i].description} submitData={this._handleFormData}/>
              </EditBox>
            );
=======


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
>>>>>>> f21d6abc0ec1fce5eca4743baf5aec43f7f9c93a
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
<<<<<<< HEAD
=======

>>>>>>> f21d6abc0ec1fce5eca4743baf5aec43f7f9c93a
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
