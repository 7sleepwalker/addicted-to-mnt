import React, { Component } from 'react';
import LocationPicker from '../LocationPicker';

class DashboardMapInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	showLocationPicker: false
		};
    this.handleDisplayLocationPicker = this.handleDisplayLocationPicker.bind(this);
    this.handleLocationSave = this.handleLocationSave.bind(this);
  }
  handleDisplayLocationPicker() {
  	this.setState({ showLocationPicker: !this.state.showLocationPicker });
	}

  handleLocationSave(position) {
    // let getValue = {};
    // Object.keys(position).forEach((item, index) => {
    //   getValue = {
    //     ...getValue,
    //     [item]: e.target.value.split(',')[index]
    //   }
    // });
    this.props.inputHandler({...position}, this.props.id, this.props.type);
	}

  handleInputChange(e) {
      let getValue = {};
      Object.keys(this.props.gcords).forEach((item, index) => {
        getValue = {
          ...getValue,
          [item]: e.target.value.split(',')[index]
        }
      });
      this.props.inputHandler({...getValue}, this.props.id, this.props.type);
  }

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
					onChange={this.handleInputChange}
				/>
				<button className='btn btn-info' onClick={this.handleDisplayLocationPicker}> Pick location </button>
				{this.state.showLocationPicker && (
					<LocationPicker
						onClose={this.handleDisplayLocationPicker}
						onSave={this.handleLocationSave}
						center={this.props.gcords}
					/>
				)}
			</div>
		);
	}
}

export default DashboardMapInput;
