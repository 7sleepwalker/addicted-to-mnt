import React, { Component } from 'react';

import TextInput from "./DashboardTextInput";
import MapInput from "./DashboardMapInput";

class DashboardGallery extends Component {
  constructor(props) {
		super(props);
    this.inputID = 0;
    this.state = {
      inputs: this.props.content.map((item) => (
        {...item, id: this.inputID++ }
      ))
    };

    this._getInputData = this._getInputData.bind(this);
    this._addNewItem = this._addNewItem.bind(this);
    this._removeItem = this._removeItem.bind(this);
	}

  _getInputData(data, id, type) {
      const newInputs = this.state.inputs.map((input) => {
        if (input.id !== id) return input;
        return { ...input, [type]: data };
      });
      this.setState({inputs: newInputs});
  }

  _addNewItem() {
    this.setState({
      inputs: [
        ...this.state.inputs,
        {
          day: 0,
          imgURL: 'URL',
          title: 'Title',
          gcords: {lat: 0, lng: 0},
          id: this.inputID++
        }
      ]
    });
  }

  _removeItem(index) {
    const tmparray = this.state.inputs;
    tmparray.splice(index, 1);
    this.setState({
      inputs: tmparray
    })
  }


  render() {
    const { structure, submit } = this.props;
    let inputs = [];

    this.state.inputs.forEach((data, i) => {
      inputs.push(
          <div className="card-list__box gallery-items__box" key={data.id}>
            <div className="card-list__closer" onClick={() => { this._removeItem(i) }}> <i className="fa fa-times-circle" /> </div>
      			<TextInput id={data.id} type={'imgURL'} description={structure.imgURL.description} value={data.imgURL} inputHandler={this._getInputData} />
      			<TextInput id={data.id} type={'title'} description={structure.title.description} value={data.title} inputHandler={this._getInputData} />
      			<MapInput id={data.id} type={'gcords'} description={structure.gcords.description}  gcords={data.gcords} inputHandler={this._getInputData} />
      		</div>
        );
    });

    if (submit) {
      this.props.submitData(this.state.inputs);
      return <div> Saving... </div>;
    }

		return (
      <div className="gallery-items card-list">
        {inputs}
        <div className="card-list__box gallery-items__box gallery-items__box--new" onClick={this._addNewItem} key={-1}>
          Add new image
        </div>
      </div>
		);
	}
}

export default DashboardGallery;
