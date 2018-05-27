import React, { Component } from 'react';
import DateInput from "./DashboardDateInput";
import TextInput from "./DashboardTextInput";

class DashboardSingleInputManager extends Component {
  constructor(props) {
		super(props);
    this.inputID = 0;
    this.state = {
      inputs: {
        [this.props.node]: this.props.date
      }
    };

    this._getInputData = this._getInputData.bind(this);
	}

  _getInputData(data, id, type) {
    this.setState({
      inputs: {
        [type]: data
      }
    });
  }

  render() {
    const { structure, submit, node } = this.props;

    if (submit) {
      this.props.submitData(this.state.inputs);
      return <div> Saving... </div>;
		}

    if (structure.type === "date") {
      return (
        <div className="single-input-manager__box">
          <DateInput id={this.inputID} type={node} description={structure.description} date={this.state.inputs[node]} inputHandler={this._getInputData} />
        </div>
      );
    }
    else {
      return (
        <div className="single-input-manager__box">
          <TextInput id={this.inputID} type={node} description={structure.description} value={this.state.inputs[node]} inputHandler={this._getInputData} />
        </div>
      );
    }
  }
}

export default DashboardSingleInputManager;
