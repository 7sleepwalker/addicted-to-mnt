import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value
    }

    this._handleInput = this._handleInput.bind(this);
  }

  _handleInput(e) {
    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <input className="contentEditor__input" type="text" onChange={this._handleInput} value={this.state.inputValue} placeholder="Enter Value ..." />
    );
  }
}

export default Input;
