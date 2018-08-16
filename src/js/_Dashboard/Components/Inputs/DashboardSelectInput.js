import React, { Component } from 'react';

import '../../../../styles/dashboard_inputs.scss';

class DashboardTextInput extends Component {
  render() {
    const { id, description, value, type, options } = this.props;
    return (
      <div>
        <label htmlFor="select1" className="contentEditor__inputDescription"> {description} </label>
        <select value={value} className="contentEditor__input contentEditor__input--select" onChange={ e => this.props.inputHandler(e.target.value, id, type)} name={`selectInput-${id}`}>
          <option value={value}>{value}</option>
          {options.filter(item => (
            item !== value
          )).map(item => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default DashboardTextInput;
