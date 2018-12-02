import React, { Component } from 'react';

import { default as EditBox } from './DashboardEditBox';
import SingleInputManager from './Inputs/DashboardDateManager';
import DateInput from './Inputs/DashboardDateInput';
import SelectInput from './Inputs/DashboardSelectInput';
import MapStages from './Inputs/DashboardMapStages';
import Gallery from './Inputs/DashboardGallery';
import Switcher from './Inputs/DashboardSwitcher';

class DashboardContentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEditBoxID: null,
      submitted: false,
      mapInputShow: true,
      markerPosition: null
    };
    this.data = [];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputData = this.handleInputData.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.toggleSubmit = this.toggleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.refreshStore();
  }

  handleSubmit(data) {
    this.setState({ submitted: true });
  }

  handlePublish(data, node) {
    let url = this.props.match.url.replace('/dashboard/panel/', '');
    if (data) {
      this.props.submit(url, node, Date());
    } else {
      this.props.submit(url, node, data);
    }

  }

  toggleSubmit(submit, activeEditBox){
    if (submit) this.setState({ submitted: submit });
    else if (typeof activeEditBox === 'number') this.setState({activeEditBoxID: activeEditBox});
  }

  handleInputData(data, node) {
    let url = this.props.match.url.replace('/dashboard/panel/', '');
    this.props.submit(url, node, data);
    this.setState({submitted: false, activeEditBoxID: -1});
  }

  render() {
    const props = this.props;
    const pageTitle = props.match.url.split('/')[props.match.url.split('/').length -1];
    let data = typeof  props.content.data[0] === 'object' ? Object.values(props.content.data) :  props.content.data;
    const structure = props.structure;
    const inputs = [];
    const addationalOptions = [];
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
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this.toggleSubmit} >
                <DateInput
                  description={structure[i].description}
                  date={data[i]}
                  node={i}
                  submitData={this.handleInputData}
                  structure={structure[i]}
                  submit={this.state.submitted}
                />
              </EditBox>
            );
            break;
          case 'map-place':
            inputs.push(
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this.toggleSubmit} >
                <MapStages
                  id={`input-${i}`}
                  group={i}
                  structure={structure[i]}
                  content={data[i]}
                  submit={this.state.submitted}
                  submitData={this.handleInputData}
                />
              </EditBox>
            );
            break;
          case 'short-text':
            inputs.push(
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this.toggleSubmit} >
                <SingleInputManager
                  description={structure[i].description}
                  date={data[i]}
                  node={i}
                  submitData={this.handleInputData}
                  submit={this.state.submitted}
                  structure={structure[i]}
                />
              </EditBox>
            );
            break;
          case 'gallery':
            inputs.push(
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this.toggleSubmit} >
                <Gallery
                  id={`input-${i}`}
                  group={i}
                  structure={structure[i]}
                  content={data[i]}
                  submit={this.state.submitted}
                  submitData={this.handleInputData}
                />
              </EditBox>
             );
            break;
          case 'tag':
            inputs.push(
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this.toggleSubmit} >
                <SingleInputManager
                  description={structure[i].description}
                  date={data[i]}
                  node={i}
                  submitData={this.handleInputData}
                  submit={this.state.submitted}
                  structure={structure[i]}
                />
              </EditBox>
            );
            break;
          case 'list':
            inputs.push(<EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this.toggleSubmit} /> );
            break;
          case 'select':
            inputs.push(
              <EditBox key={i} id={editBoxID} expanded={expanded} structure={structure[i]} data={data[i]} match={this.props.match.url} changer={this.toggleSubmit} >
                <SelectInput
                  description={structure[i].description}
                  date={data[i]}
                  options={structure[i].options}
                  submitData={this.handleInputData}
                  submit={this.state.submitted}
                  structure={structure[i]}
                />
              </EditBox>
            );
            break;
          case 'publish':
            addationalOptions.push(
                <Switcher
                  description={structure[i].description}
                  data={data[i]}
                  node={i}
                  structure={structure[i]}
                  onChange={this.handlePublish}
                />
            );
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
        <div className="contentEditor__addationalOptions">
          {addationalOptions}
        </div>
        <div className='contentEditor__form'>
          {inputs}
        </div>
      </div>
    );
  }
}

export default DashboardContentEditor;
