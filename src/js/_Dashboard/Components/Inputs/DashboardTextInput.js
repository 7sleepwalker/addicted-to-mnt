import React, { Component } from 'react';

class DashboardTextInput extends Component {
	render() {
		if (this.props.submit) {
			this.props.submitData(this.props.group, "title", this.refs[this.props.id].value);
			return null;
		}

		return (
			<div> <span className="contentEditor__inputDescription">{this.props.description}</span> <input ref={this.props.id} className="contentEditor__input contentEditor__input--textInput" defaultValue={this.props.value} /> </div>
		);
	}
}

export default DashboardTextInput;
