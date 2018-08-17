import React, { Component } from 'react';

import { default as EditBox } from './DashboardEditBox';
import SingleInputManager from './Inputs/DashboardDateManager';
import MapStages from './Inputs/DashboardMapStages';
import Gallery from './Inputs/DashboardGallery';
import GMap from '../../Components/Map';

class DashboardContentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEditBoxID: null,
      submitted: false,
      mapInputShow: false
    };
    this.data = [];
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputData = this._handleInputData.bind(this);
    this._toggleSubmit = this._toggleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.refreshStore();
  }

  _handleSubmit(data) {
    this.setState({ submitted: true });
  }

  _toggleSubmit(submit, activeEditBox){
    if (submit) this.setState({ submitted: submit });
    else if (typeof activeEditBox === 'number') this.setState({activeEditBoxID: activeEditBox});
  }

  _handleInputData(data, node) {
    let url = this.props.match.url.replace('/dashboard/panel/', '');
    this.props.submit(url, node, data);
    this.setState({submitted: false, activeEditBoxID: -1});
  }

  render() {
    const props = this.props;
    const pageTitle = props.match.url.split('/')[props.match.url.split('/').length -1];
    let data = typeof  props.content.data[0] === 'object' ? Object.values(props.content.data) :  props.content.data;
    // let data = props.content.data;
    const structure = props.structure;
    let inputs = [];
    let editBoxID = 0;

    if (data.length > 1) {
      data = data.filter(obj => (
        obj.id === parseInt(props.match.params.id, 10)
      ));
      data = data[0];
    }

    for (let i in structure) {

      if (i !== 'structure') {
        let expanded = false;
        if (this.state.activeEditBoxID === editBoxID)
          expanded = true;
        // Render component for each child in structure. Check type of component and render specific definded for it
        switch(structure[i].type) {
          case 'date':
            inputs.push(
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this._toggleSubmit} >
                <SingleInputManager
                  description={structure[i].description}
                  date={data[i]}
                  node={i}
                  submitData={this._handleInputData}
                  structure={structure[i]}
                  submit={this.state.submitted}
                />
              </EditBox>
            );
            break;
          case 'map-place':
            inputs.push(
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this._toggleSubmit} >
                <MapStages
                  id={`input-${i}`}
                  group={i}
                  structure={structure[i]}
                  content={data[i]}
                  submit={this.state.submitted}
                  submitData={this._handleInputData}
                />
              </EditBox>
            );
            break;
          case 'short-text':
            inputs.push(
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this._toggleSubmit} >
                <SingleInputManager
                  description={structure[i].description}
                  date={data[i]}
                  node={i}
                  submitData={this._handleInputData}
                  submit={this.state.submitted}
                  structure={structure[i]}
                />
              </EditBox>
            );
            break;
          case 'gallery':
            inputs.push(
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this._toggleSubmit} >
                <Gallery
                  id={`input-${i}`}
                  group={i}
                  structure={structure[i]}
                  content={data[i]}
                  submit={this.state.submitted}
                  submitData={this._handleInputData}
                />
              </EditBox>
             );
            break;
          case 'tag':
            inputs.push(
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this._toggleSubmit} >
                <SingleInputManager
                  description={structure[i].description}
                  date={data[i]}
                  node={i}
                  submitData={this._handleInputData}
                  submit={this.state.submitted}
                  structure={structure[i]}
                />
              </EditBox>
            );
            break;
          case 'list':
            inputs.push(<EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this._toggleSubmit} /> );
            break;
          case 'publish':
            inputs.push();
            break;
          default:
        }
        editBoxID++;
      }
    }

    return (
      <div className='dashboard__contentEditor'>
        <h2> Content editor </h2>
        <h4> page: {pageTitle} </h4>
        <div className='contentEditor__form'>
          {inputs}
        </div>
        {this.state.mapInputShow && <div className='contentEditor__mapBox'>
          <GMap mapID='mappicker' mapInput>
            <div className='gMap__buttonBox'>
              <button className='btn btn-danger'>Cancel</button>
              <button className='btn btn-success'>Save</button>
            </div>
          </GMap>
        </div>
        }
      </div>
    );
  }
}

export default DashboardContentEditor;
