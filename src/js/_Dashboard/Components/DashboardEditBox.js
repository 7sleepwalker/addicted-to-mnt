import React, { Component } from 'react';

import TextInput from "./Inputs/DashboardTextInput";
import DateInput from "./Inputs/DashboardDateInput";
import MapInput from "./Inputs/DashboardMapInput";

class DashboardEditBox extends Component {
  constructor(props) {
      super(props);

      this.state = {
        edit: false,
        content: this.props.data,
        updated: false,
  			submited: false
      }
  		this.data = [];
      this._edit = this._edit.bind(this);
      this._save = this._save.bind(this);
      this._cancel = this._cancel.bind(this);
  		this._handleFormData = this._handleFormData.bind(this);
    }

    componentWillReceiveProps(newProps) {
      if (!this.state.updated){
        this.setState({content: newProps.data});
      }
    }

    _edit() {
      this.setState({edit: true});
  		this.setState({submited: false})
    }

    _save() {
  		// gather all inputs and parse into object than send to databse to update
  		this.setState({submited: true});
  		this.data = [];
    }

    _cancel() {
      this.setState({edit: false});
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

      console.log("RENDER EDITBOX");
  		let inputs = [];
  		let content = this.state.content;
  		let structure = this.props.structure;

  		if(this.state.edit) {
  			for ( let i in content) {
  				inputs.push(
  					<li key={i}>
  						<DateInput id={`dataPicker-${i}`} group={i} submit={this.state.submited} description={structure.date.description} date={content[i].date} submitData={this._handleFormData} />
  						<TextInput id={`textInput-${i}`} group={i} submit={this.state.submited} value={content[i].title} description={structure.title.description} submitData={this._handleFormData}/>
  						<MapInput id={`mapPicker-${i}`} group={i} description={structure.place.description} submit={this.state.submited} lat={content[i].lat} lng={content[i].lng} submitData={this._handleFormData}/>
  					</li>
  				);
  			}
  			return (
  				<div className="dashboard__editBox dashboard__editBox--active dashboard__galleryInput">
  					<label className="contentEditor__label"> <h5>{this.props.structure.description}</h5>
  						{inputs}
  					</label>
  					<button onClick={this._save} className="btn btn-success"> Save </button>
  					<button onClick={this._cancel} className="btn btn-danger"> Close </button>
  				</div>
      );
  		} else {
        if (typeof(content) !== "string") {
          for ( let i in content) {
            console.log(i);
    				inputs.push(<li key={i}> {content[i].date} {content[i].title} </li>);
    			}
        }
        else {
          inputs.push(<li key="-1"> {content} </li>);
        }

  			return (
  				<div className="dashboard__editBox dashboard__galleryInput">
  					<h5> {this.props.structure.description} </h5>
  					<ul>
  						{inputs}
  					</ul>
  					<button onClick={this._edit} className="btn btn-info"> Edit </button>
  				</div>
      );
  		}
    }
  }

export default DashboardEditBox;
