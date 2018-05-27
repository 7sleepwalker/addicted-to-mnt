import React, { Component } from 'react';

class DashboardDateInput extends Component {
	render() {
		const { id, description, date, type } = this.props;

		return (
			<div>
				<span className="contentEditor__inputDescription"> {description} </span>
				<input
					name={`dateInput-${id}`}
					className="contentEditor__input contentEditor__input--dateInput"
					value={date}
					onChange={ e => this.props.inputHandler(e.target.value, id, type)}
				/>
			</div>
		);
	}
}

export default DashboardDateInput;
