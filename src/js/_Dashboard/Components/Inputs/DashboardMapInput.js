import React, { Component } from 'react';

class DashboardTextInput extends Component {

	constructor(props) {
		super(props);
		this.state = {
			content: {
				content:`${this.props.gcords.lat} ${this.props.gcords.lng}`
			}
		}
	}

	render() {
		const { id, description, gcords, submit, node, group } = this.props;

		if (submit)
			this.props.submitData({ lat: this.state.content.content.split(' ')[0], lng: this.state.content.content.split(' ')[1] }, group, node)

		return (
			<div>
				<span className="contentEditor__inputDescription"> {description} </span>
				<input
					name={id}
					className="contentEditor__input contentEditor__input--textInput"
					value={this.state.content.content}
					onChange={ e => this.setState({ content: { content: e.target.value }}) }
				/>
			</div>
		);
	}
}

export default DashboardTextInput;
