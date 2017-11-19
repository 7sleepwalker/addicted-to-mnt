import React, { Component } from 'react';

import TextInput from "./DashboardTextInput";
import DateInput from "./DashboardDateInput";
import MapInput from "./DashboardMapInput";

class DashboardMapStages extends Component {
  render() {
    let inputs = [];
    let content = this.props.content;
    let structure = this.props.structure;
		if (this.props.submit) {
			// let lat = this.refs[this.props.id].value.split(', ')[0];
			// let lng = this.refs[this.props.id].value.split(', ')[1];
			// this.props.submitData(this.props.group, "lat", lat);
			// this.props.submitData(this.props.group, "lng", lng);
			return null;
		}

    for ( let i in content) {
				inputs.push(
					<li key={i}>
						<DateInput id={`dataPicker-${i}`} group={i}  description={structure.date.description} date={content[i].date}  />
						<TextInput id={`textInput-${i}`} group={i} description={structure.title.description} value={content[i].title} />
						<MapInput id={`mapPicker-${i}`} group={i} description={structure.place.description}  lat={content[i].lat} lng={content[i].lng} />
					</li>
				);
			}

  		return (
        <ul>
          {inputs}
        </ul>
  		);
  	}
}

export default DashboardMapStages;
