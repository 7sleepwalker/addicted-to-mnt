import React, { Component } from 'react';

import GMap from '../../Components/Map';

class LocationPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      mapPosition: null
    };

    this.handleMapMove = this.handleMapMove.bind(this);
    this.handleMapClose = this.handleMapClose.bind(this);
    this.handleMapSave = this.handleMapSave.bind(this);
  }
  handleMapClose() {
    this.props.onClose();
  }

  handleMapSave() {
    this.props.onSave({
      lat: this.state.mapPosition.lat.toString(),
      lng: this.state.mapPosition.lng.toString()
    });
    this.props.onClose();
  }

  handleMapMove(position) {
    this.setState({
      mapPosition: position
    })
  }

  render() {
    return (
      <div className='locationPicker'>
        <GMap mapID='mappicker' mapInput onMapMove={this.handleMapMove} center={this.props.center}>
          <div className='locationPicker__buttonBox'>
            <button className='btn btn-danger' onClick={this.handleMapClose}>Cancel</button>
            <button className='btn btn-success' onClick={this.handleMapSave}>Save</button>
          </div>
        </GMap>
      </div>
    );
  }
}

export default LocationPicker;