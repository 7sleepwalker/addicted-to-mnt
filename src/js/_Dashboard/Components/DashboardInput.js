import React, { Component } from 'react';

class DashboardInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      content: this.props.data,
      updated: false
    }
    this._edit = this._edit.bind(this);
    this._save = this._save.bind(this);
    this._cancel = this._cancel.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.state.updated){
      this.setState({content: newProps.data});
    }
  }

  _edit() {
    this.setState({edit: true});
  }

  _save() {
    let inputValue = this.refs[this.props.name].value;
    let postObject = {};
    postObject[this.props.name] = inputValue;
    this.props.changer(this.props.match , postObject);
    this.setState({content: this.refs[this.props.name].value, edit: false, updated: true});
  }

  _cancel() {
    this.setState({edit: false});
  }

  render() {
    console.log("RENDER INPUT");
    
    if(this.state.edit) {
      return (
        <div className="dashboard__editBox dashboard__editBox--active">
          <label className="contentEditor__label"> <h5>{this.props.structure.description}</h5>
            <input ref={this.props.name} className="contentEditor__input" defaultValue={this.state.content} />
          </label>
          <button onClick={this._save} className="btn btn-success"> Save </button>
          <button onClick={this._cancel} className="btn btn-danger"> Close </button>
        </div>
      );
    }

    else {
      return (
        <div className="dashboard__editBox">
          <h5> {this.props.structure.description} </h5> <div className="dashboard__editBox__label"> {this.state.content} </div>
          <button onClick={this._edit} className="btn btn-info"> Edit </button>
        </div>
      );
    }
  }
}

export default DashboardInput;
