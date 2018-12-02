import React, { Component } from 'react';

import TextInput from './DashboardTextInput';
import DateInput from './DashboardDateInput';
import MapInput from './DashboardMapInput';
import GMap from '../../../Components/Map';

class DashboardMapStages extends Component {
  constructor(props) {
	super(props);
    this.placeID = 0;
    this.state = {
      places: {},
    };

    this.getInputData = this.getInputData.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  
  componentDidMount() {
    if (this.props.content !== 'empty' && typeof this.props.content !== 'undefined' && this.props.content.hasOwnProperty('0')) {
      this.setState({ places: this.props.content.map((item) => (
          { ...item, id: this.placeID++ }
        ))
      });
    }
  }

  componentDidUpdate() {
    if (this.props.submit) {
      this.props.submitData(Object.assign({}, this.state.places), 'places');
    }
  }

  getInputData(data, id, type) {
      const newInputs = this.state.places.map((place) => {
        if (place.id !== id) return place;
        return { ...place, [type]: data };
      });
      this.setState({places: newInputs});
  }

  addNewItem() {
    this.setState({
      places: [
        ...this.state.places,
        {
          date: '01.01',
          title: 'Title',
          subtitle: 'Subtitle',
          gcords: { lat: 0, lng: 0 },
          id: this.placeID++
        }
      ]
    });
  }

  removeItem(index) {
    const tmparray = this.state.places;
    tmparray.splice(index, 1);
    this.setState({
      places: tmparray
    })
  }

  render() {
    const { structure } = this.props;
    let places = [];
    
    if (this.state.places.length > 0) {
        this.state.places.forEach((data, i) => {
          places.push(
              <div className='card-list__box map-stages__box' key={data.id}>
                  <div className='card-list__closer' onClick={() => { this.removeItem(i) }}> <i className='fa fa-times-circle' /> </div>
                  <TextInput id={data.id} type={'title'} description={structure.title.description} value={data.title} inputHandler={this.getInputData} />
                  <TextInput id={data.id} type={'subtitle'} description={structure.subtitle.description} value={data.subtitle} inputHandler={this.getInputData} />
                  <DateInput id={data.id} type={'date'} description={structure.date.description} date={data.date} onInputChange={this.getInputData} />
                  <MapInput id={data.id} type={'gcords'} description={structure.gcords.description}  gcords={data.gcords} inputHandler={this.getInputData} onMapOpen={this.handleMapOpen} />
              </div>
            );
        });
    }
    
    return (
      <div className='map-stages card-list'>
        {places}
        <div className='card-list__box map-stages__box map-stages__box--new' onClick={this.addNewItem} key={-1}>
          Add new place
        </div>
      </div>
    );
  }
}

export default DashboardMapStages;
