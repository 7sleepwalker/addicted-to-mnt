import React, { Component } from 'react';

class DashboardMapInput extends Component {
  render() {
  		if (this.props.submit) {
  			let lat = this.refs[this.props.id].value.split(', ')[0];
  			let lng = this.refs[this.props.id].value.split(', ')[1];
  			this.props.submitData(this.props.group, "lat", lat);
  			this.props.submitData(this.props.group, "lng", lng);
  			return null;
  		}

  		return (
  			<div> <span className="contentEditor__inputDescription">{this.props.description}</span> <input ref={this.props.id} className="contentEditor__input contentEditor__input--mapPicker" defaultValue={`${this.props.lat}, ${this.props.lng}`} /> </div>
  		);
  	}
}

export default DashboardMapInput;
