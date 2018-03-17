import React, { Component } from 'react';

class DashboardDateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        content: this.props.date
      }
    }
  }

  render() {
    const { id, description, value, submit, node, group } = this.props;
		if (submit && node === undefined)
			this.props.submitData({[group]: this.state.content.content});
		else if (submit)
			this.props.submitData(this.state.content.content, group, node)


		return (
			<div>
        <span className="contentEditor__inputDescription"> {description} </span>
        <input
          name={id}
          className="contentEditor__input contentEditor__input--dataPicker"
          value={this.state.content.content}
					onChange={ e => this.setState({ content: { content: e.target.value }}) }
        />
      </div>
		);
	}
}

export default DashboardDateInput;
