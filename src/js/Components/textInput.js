import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Input extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      value: ' ',
    }
  }

  render() {
    return (
      <div className="input__box">
        <input type="text" id={ this.props.inputID } onChange={ (e) => this.setState({ value: e.target.value })} value={this.state.value} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default Input;
