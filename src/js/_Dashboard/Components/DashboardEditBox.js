import React, { Component } from 'react';

class DashboardEditBox extends Component {
  constructor(props) {
      super(props);
      this._save = this._save.bind(this);
      this._edit = this._edit.bind(this);
      this._renderChildren = this._renderChildren.bind(this)
    }

    _renderChildren() {
      return React.Children.map(this.props.children, child => {
        return child
      })
    }

    _edit() {
      this.props.changer(false, this.props.id);
    }

    _save(save) {
      this.props.changer(save, -1);
    }

    render() {
  		if(this.props.expanded) {
  			return (
  				<div className="dashboard__editBox dashboard__editBox--active">
  					<label className="contentEditor__label">
  						{this._renderChildren()}
  					</label>
  					<button onClick={() => this._save(true)} className="btn btn-success"> Save </button>
  					<button onClick={() => this._save(false)} className="btn btn-danger"> Close </button>
  				</div>
        );
      } else if (this.props.submited) {
  			return (
  				<div className="dashboard__editBox">
  					<h5> {this.props.structure.description} </h5>
            <div> Data saved! </div>
  					<button onClick={this._edit} className="btn btn-info"> Edit </button>
  				</div>
        );
  		}
      else {
        return (
          <div className="dashboard__editBox">
  					<h5> {this.props.structure.description} </h5>
  					<button onClick={this._edit} className="btn btn-info"> Edit </button>
  				</div>
        )
      }
    }
  }

export default DashboardEditBox;
