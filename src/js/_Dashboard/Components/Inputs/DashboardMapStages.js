import React, { Component } from 'react';

import TextInput from "./DashboardTextInput";
import DateInput from "./DashboardDateInput";
import MapInput from "./DashboardMapInput";

class DashboardMapStages extends Component {
  constructor(props) {
		super(props);
    this.content = this.props.content.map((item) => (
      {...item}
    ));
    this._getTextInputData = this._getTextInputData.bind(this);
    this._getMapInputData = this._getMapInputData.bind(this);
	}

  _getTextInputData(data, group, node) {
    (group !== undefined)
      ? this.content[group][node] = data
      : this.content = data;
  }

  _getMapInputData(data, group, node) {
    (group !== undefined)
      ? this.content[group][node] = data
      : this.content = data;
  }

  render() {
    let inputs = [];
    const { content, structure, submit } = this.props;
		if (submit) {
      setTimeout(() => {
        this.props.submitData(this.content);
      }, 1000);
		}

    for ( let i in content) {
				inputs.push(
					<div className="map-stages__box" key={i}>
            <div className="map-stages__closer"> <i className="fa fa-times-circle" /> </div>
						<DateInput id={`dataPicker-${i}`} group={i} node={'date'} description={structure.date.description} date={content[i].date} submit={submit} submitData={this._getTextInputData} />
						<TextInput id={`textInput-${i}`} group={i} node={'title'} description={structure.title.description} value={content[i].title} submit={submit} submitData={this._getTextInputData} />
						<MapInput id={`mapPicker-${i}`} group={i} node={'gcords'} description={structure.gcords.description}  gcords={content[i].gcords} submit={submit} submitData={this._getMapInputData} />
					</div>
				);
			}

  		return (
        <div className="map-stages">
          {inputs}
          <div className="map-stages__box" key={-1}>
          </div>
        </div>
  		);
  	}
}

export default DashboardMapStages;
