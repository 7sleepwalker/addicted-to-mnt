import React  from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { wrapper as GoogleApiWrapper } from "../GoogleApiComponent";
import mapStyle from "../../styles/map.json";
import "../../styles/map.css";



export class GMap extends React.Component {

  renderChildren() {
    
   }

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom} = this.props;
      const {lat, lng} = initialCenter;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return (
      <div className="google-map" ref='map'>
        Loading map...
        {this.renderChildren()}
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
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBXP7BaryBC4CGaVmwzQ9Q52fn1Ybm_n6o'
})(GMap)
