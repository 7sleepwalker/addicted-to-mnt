import React  from 'react';
import PropTypes from 'prop-types';

import mapStyle from "../../styles/map.json";



export default class GMap extends React.Component {

  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById(this.props.mapID), {  // eslint-disable-line no-unused-vars
      center: {lat: this.props.initialCenter.lat, lng: this.props.initialCenter.lng},
      zoom: this.props.zoom,
      mapTypeId: 'roadmap',
      styles: mapStyle
    });
  }


  render() {
    console.log(this.props);
    return (
      <div className="google-map" id={this.props.mapID} ref='map'>
        Loading map...
      </div>
    )
  }
};

GMap.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object
}
GMap.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  },
  center: {},
  centerAroundCurrentLocation: false,
  style: {},
  containerStyle: {},
  visible: true,
  mapID: "map-0"
}
