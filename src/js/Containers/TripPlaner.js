import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import GMap from '../Components/Map';
import { getPlan } from '../Actions/tripplanerActions';
import { default as Input } from '../Components/textInput';

const colorArray = ['9ec9cf', 'b41b24', '2c1963', 'fdef07', '776b54', 'f0f3f5', 'ffc0cb', '688e1e'];

class TripPlanner extends Component {

  componentWillMount() {
    this.props.dispatch(getPlan());
  }

  render() {
    const plan = get(this.props.places, 'places', null);
    if (plan === null)
      return null

    console.log(plan);

    return (
      <div className="tripPlaner">
        <GMap mapID={`map-0`} places={plan.places}>
          <Input inputID="pac-input" placeholder='Search for places...' />
        </GMap>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    places: store.places
  };
}

export default connect(mapStateToProps)(TripPlanner);
