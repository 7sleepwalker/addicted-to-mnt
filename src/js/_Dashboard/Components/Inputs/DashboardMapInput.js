import React, { Component } from 'react';

class DashboardMapInput extends Component {
	render() {
		const { id, description, gcords, type } = this.props;

		const value = Object.keys(gcords).map(item => (
			gcords[item]
		));

		return (
			<div>
				<span className="contentEditor__inputDescription"> {description} </span>
				<input
					disabled
					name={`mapInput-${id}`}
					className="contentEditor__input contentEditor__input--mapInput"
					value={value}
					onChange={ e => {
							let getValue = {};
							Object.keys(gcords).forEach((item, index) => {
								console.log({[item]: e.target.value.split(',')[index]});
								getValue = {
									...getValue,
									[item]: e.target.value.split(',')[index]
								}
							});
							this.props.inputHandler({...getValue}, id, type);
					}}
				/>
				<button className='btn btn-info'> Pick location </button>
			</div>
		);
	}
}

export default DashboardMapInput;
