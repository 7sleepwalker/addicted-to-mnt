import React, { Component } from 'react';

import { default as EditBox } from './DashboardEditBox';
import TextInput from "./Inputs/DashboardTextInput";
import DateInput from "./Inputs/DashboardDateInput";
import MapStages from "./Inputs/DashboardMapStages";
import Gallery from "./Inputs/DashboardGallery";
import ListInput from "./Inputs/DashboardListInput";

class DashboardContentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submited: false
    };
    this.data = [];
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputData = this._handleInputData.bind(this);
    this._toggleSubbmit = this._toggleSubbmit.bind(this);
  }

  _handleSubmit(data) {
    // this.props.submit(url, data);
    this.setState({ submited: true });
  }

  _toggleSubbmit(value){
    this.setState({ submited: value });
  }

  _handleInputData(data) {
    console.log(data);
  }

  render() {
    const pageTitle = this.props.match.url.split('/')[this.props.match.url.split('/').length -1];
    let data = this.props.content.data;
    const structure = this.props.structure;
    const props = this.props;
    let inputs = [];

    if (data.length > 1) {
      data = data.filter(obj => (
        obj.id === parseInt(props.match.params.id, 10)
      ));
      data = data[0];
    }

    for (let i in structure) {
      if (i !== "structure") {
        // Render component for each child in structure. Check type of component and render specific definded for it
        switch(structure[i].type) {
          case "date":
            inputs.push(
              <EditBox key={i} structure={structure[i]} data={data[i]} name={i} match={this.props.match.url} changer={this._toggleSubbmit} >
                <DateInput
                  id={`input-${i}`}
                  group={i}
                  submit={this.state.submited}
                  description={structure[i].description}
                  date={data[i]}
                  submitData={this._handleInputData}
                />
              </EditBox>
            );
            break;
          case "map-place":
            inputs.push(
              <EditBox key={i} structure={structure[i]} data={data[i]} name={i} match={this.props.match.url} changer={this._toggleSubbmit} >
                <MapStages
                id={`input-${i}`}
                group={i}
                structure={structure[i]}
                content={data[i]}
                submit={this.state.submited}
                submitData={this._handleInputData}
              />
              </EditBox>
            );
            break;
          case "short-text":
            inputs.push(
              <EditBox key={i} structure={structure[i]} data={data[i]} name={i} match={this.props.match.url} changer={this._toggleSubbmit} >
                <TextInput
                  id={`input-${i}`}
                  group={i}
                  submit={this.state.submited}
                  value={data[i]}
                  description={structure[i].description}
                  submitData={this._handleInputData}
                />
              </EditBox>
            );
            break;
          case "gallery":
            inputs.push(
              <EditBox key={i} structure={structure[i]} data={data[i]} name={i} match={this.props.match.url} changer={this._toggleSubbmit} >
                <Gallery
                  id={`input-${i}`}
                  group={i}
                  structure={structure[i]}
                  content={data[i]}
                  submit={this.state.submited}
                  submitData={this._handleInputData}
                />
              </EditBox>
             );
            break;
          case "tag":
            inputs.push(
              <EditBox key={i} structure={structure[i]} data={data[i]} name={i} match={this.props.match.url} changer={this._toggleSubbmit} >
                <ListInput
                  id={`input-${i}`}
                  group={i}
                  submit={this.state.submited}
                  value={data[i]}
                  description={structure[i].description}
                  submitData={this._handleInputData}
                />
              </EditBox>
            );
            break;
          case "list":
            inputs.push(<EditBox key={i} structure={structure[i]} data={data[i]} name={i} match={this.props.match.url} changer={this._toggleSubbmit} /> );
            break;
          default:
            console.log("Missing: ", structure);
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
