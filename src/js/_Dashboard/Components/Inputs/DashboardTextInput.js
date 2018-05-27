import React, { Component } from 'react';

class DashboardTextInput extends Component {
	render() {
		const { id, description, value, type } = this.props;
		return (
			<div>
				<span className="contentEditor__inputDescription"> {description} </span>
				<input
					name={`textInput-${id}`}
					className="contentEditor__input contentEditor__input--textInput"
					value={value}
					onChange={ e => this.props.inputHandler(e.target.value, id, type)}
				/>
			</div>
		);
	}
}

export default DashboardTextInput;
