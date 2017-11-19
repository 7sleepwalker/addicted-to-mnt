import React, { Component } from 'react';

class DashboardDateInput extends Component {
  render() {
		if (this.props.submit) {
			this.props.submitData(this.props.group, "date", this.refs[this.props.id].value);
			return null;
		}

		return (
			<div> <span className="contentEditor__inputDescription">{this.props.description}</span> <input ref={this.props.id} className="contentEditor__input contentEditor__input--dataPicker" defaultValue={this.props.date} /> </div>
		);
	}
}

export default DashboardDateInput;
