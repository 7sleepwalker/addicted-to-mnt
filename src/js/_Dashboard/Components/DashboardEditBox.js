import React, { Component } from 'react';

import TextInput from "./Inputs/DashboardTextInput";
import DateInput from "./Inputs/DashboardDateInput";
import MapInput from "./Inputs/DashboardMapInput";

class DashboardEditBox extends Component {
  constructor(props) {
      super(props);

      this.state = {
        edit: false,
        updated: false,
        submited: this.props.submited,
        content: this.props.data
      }
  		this.data = [];
      this._edit = this._edit.bind(this);
      this._save = this._save.bind(this);
      this._cancel = this._cancel.bind(this);
      this._renderChildren = this._renderChildren.bind(this)
    }

    componentWillReceiveProps(newProps) {
      if (!this.state.updated){
        this.setState({content: newProps.data});
      }
    }

    _renderChildren() {
      return React.Children.map(this.props.children, child => {
        return child
      })
    }

    _edit() {
      this.setState({edit: true});
  		this.setState({submited: false})
    }

    _save() {
  		// this.setState({submited: true, edit: false});
      this.props.changer(true);
    }

    _cancel() {
      this.setState({edit: false});
      this.props.changer(false);
    }

    render() {
  		if(this.state.edit) {
  			return (
  				<div className="dashboard__editBox dashboard__editBox--active">
  					<label className="contentEditor__label"> <h5>{this.props.structure.description}</h5>
  						{this._renderChildren()}
  					</label>
  					<button onClick={this._save} className="btn btn-success"> Save </button>
  					<button onClick={this._cancel} className="btn btn-danger"> Close </button>
  				</div>
      );
  		} else {
  			return (
  				<div className="dashboard__editBox">
  					<h5> {this.props.structure.description} </h5>
  					<button onClick={this._edit} className="btn btn-info"> Edit </button>
  				</div>
      );
  		}
    }
  }

export default DashboardEditBox;
