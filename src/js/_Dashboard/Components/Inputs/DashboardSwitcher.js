import React, { Component } from 'react';

class DashboardSwitcher extends Component {

  constructor ( props ) {
    super( props );

    this.state = {
      isChecked: props.data
    };

    this._handleChange = this._handleChange.bind(this);
  }

  componentDidUpdate() {
    if (this.props.submit) {
      this.props.submitData(this.state.isChecked, this.props.structure);
    }
  }

  _handleChange () {
    this.setState({ isChecked: !this.state.isChecked }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.isChecked, this.props.node);
      }
    });

  }

  render () {
    return(
      <div className="switch-container">
        <div className="switcher">
          <input id="switch-demo" type="checkbox" checked={this.state.isChecked} onChange={this._handleChange} />
          <label htmlFor="switch-demo">{this.props.description}</label>
        </div>
      </div>
    );
  }
}

export default DashboardSwitcher;
