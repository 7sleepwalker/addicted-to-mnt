import React  from 'react';
import PropTypes from 'prop-types';

import mapStyle from "../../styles/map.json";



export default class GMap extends React.Component {


  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById(this.props.mapID), {  // eslint-disable-line no-unused-vars
      center: {lat: parseInt(this.props.places[0].lat, 10), lng: parseInt(this.props.places[0].lng, 10)},
      zoom: this.props.zoom,
      mapTypeId: 'roadmap',
      styles: mapStyle
    });
    if (this.props.places.length > 1) {



      let dirService = new window.google.maps.DirectionsService();
      let dirRenderer = new window.google.maps.DirectionsRenderer({suppressMarkers: false});
      dirRenderer.setMap(map);
      let request = {
        origin: "48.1252,11.5407",
        destination: "48.13376,11.5535",
        waypoints: [{location:"48.12449,11.5536"}, {location:"48.12515,11.5569"}],
        travelMode: window.google.maps.TravelMode.DRIVING
      };
      dirService.route(request, function(result, status) {
        if (status === window.google.maps.DirectionsStatus.OK) {
          dirRenderer.setDirections(result);
        }
      });
    } else if (this.props.places.length === 1){
      let marker = new window.google.maps.Marker({
          position: {lat: parseInt(this.props.places[0].lat, 10), lng: parseInt(this.props.places[0].lng, 10)},
          map: map,
          title: 'Hello World!'
        });
    }


  }


  render() {
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
