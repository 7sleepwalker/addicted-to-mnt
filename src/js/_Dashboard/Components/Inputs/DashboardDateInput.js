import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class DashboardDateInput extends Component {
	constructor(props) {
		super(props);

		const day = this.props.date.split('.')[0];
		const month = this.props.date.split('.')[1];
		this.state = {
			startDate: new Date(`${month}.${day}`),
			endDate: '',
		};


		this.handleChangeStart = this.handleChangeStart.bind(this);
		this.handleChangeEnd = this.handleChangeEnd.bind(this);
		this._formatDateToInput = this._formatDateToInput.bind(this);
	}

	_formatDateToInput() {
    const startDate = `${this.state.startDate.getDate()}.${this.state.startDate.getMonth()}`;
    const endDate = this.state.endDate ?
			` - ${this.state.endDate.getDate()}.${this.state.endDate.getMonth()}`
			: '';
    const dateFormat = `${startDate}${endDate}`;
    this.props.onInputChange(
      dateFormat, this.props.id, this.props.type
    );
	}

	handleChangeStart(date) {
		this.setState({ startDate: date }, () => {
      this._formatDateToInput();
		});
	}

	handleChangeEnd(date) {
    this.setState({ endDate: date }, () => {
      this._formatDateToInput();
		});
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<span className="contentEditor__inputDescription"> {this.props.description} </span>
				<div className="contentEditor__input contentEditor__input--dateInput">
					<DatePicker
						selected={this.state.startDate}
						selectsStart={this.state.endDate}
						startDate={this.state.startDate}
						endDate={this.state.endDate}
						onChange={this.handleChangeStart}
						dateFormat="dd-MM"
					/>
					<DatePicker
						selected={this.state.endDate}
            isClearable={this.state.endDate}
						selectsEnd
						startDate={this.state.startDate}
						endDate={this.state.endDate}
						onChange={this.handleChangeEnd}
						dateFormat="dd-MM"
            placeholderText="For date range"
					/>
				</div>
			</div>
		);
	}
}
DashboardDateInput.defaultProps = {
  onInputChange: () => {},
};

DashboardDateInput.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
  onInputChange: PropTypes.func,
};

export default DashboardDateInput;
