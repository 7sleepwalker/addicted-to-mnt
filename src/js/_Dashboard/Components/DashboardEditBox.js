import React, { Component } from 'react';

class DashboardEditBox extends Component {
  constructor(props) {
      super(props);

      this.state = {
        edit: false,
        content: this.props.data,
        updated: false,
        submited: this.props.submited
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
        // TODO: Change the name prop to this.props.name
        //console.log(child.props.submit);
        return child
      })
    }

    _edit() {
      this.setState({edit: true});
  		this.setState({submited: false})
    }

    _save() {
  		// gather all inputs and parse into object than send to databse to update
  		this.setState({submited: true});
  		this.data = [];
    }

    _cancel() {
      this.setState({edit: false});
    }

    render() {

      console.log("RENDER EDITBOX");

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
