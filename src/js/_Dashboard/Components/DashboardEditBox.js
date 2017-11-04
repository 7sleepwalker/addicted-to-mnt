import React, { Component } from 'react';

class DashboardEditBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      content: this.props.data
    }

    this._edit = this._edit.bind(this);
    this._save = this._save.bind(this);
    this._cancel = this._cancel.bind(this);
  }

  _edit() {
    this.setState({edit: true});
  }
  _save() {
    let inputValue = this.refs[this.props.name].value;
    let postObject = {};
    postObject[this.props.name] = inputValue;
    this.props.changer(this.props.match , postObject);
    this.setState({content: this.refs[this.props.name].value, edit: false});
  }
  _cancel() {
    this.setState({edit: false});
  }

  render() {
    console.log(this.props);
    if(this.state.edit) {
      return (
        <div className="dashboard__editBox dashboard__editBox--active">
          <label className="contentEditor__label">
            <div>{this.props.name}:</div>
            <input ref={this.props.name} className="contentEditor__input" defaultValue={this.state.content} />
          </label>
          <button onClick={this._save} className="btn btn-success"> Save </button>
          <button onClick={this._cancel} className="btn btn-success"> Close </button>
        </div>
      );
    } else {
      return (
        <div className="dashboard__editBox">
          <div className="dashboard__editBox__label"> {this.state.content} </div>
          <button onClick={this._edit} className="btn btn-success"> Edit </button>
        </div>
      );
    }
  }
}

export default DashboardEditBox;
