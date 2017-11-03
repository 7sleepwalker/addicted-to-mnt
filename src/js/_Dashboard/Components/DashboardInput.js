import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value
    }

    this._handleInput = this._handleInput.bind(this);
    this._save = this._save.bind(this);
  }

  _handleInput(e) {
    this.setState({inputValue: e.target.value});
  }

  _save() {
    let inputValue = this.refs[this.props.name];
    let postObject = {};
    inputValue = inputValue.value;
    postObject[this.props.name] = inputValue;
    this.props.changer(this.props.match , postObject);
  }

  render() {
    return (
      <div>
        <label className="contentEditor__label">
          <div>{this.props.name}:</div>
          <input ref={this.props.name} className="contentEditor__input" defaultValue={this.props.data} />
        </label>
        <button onClick={this._save} className="btn btn-success"> Save </button>
      </div>
    );
  }
}

export default Input;
