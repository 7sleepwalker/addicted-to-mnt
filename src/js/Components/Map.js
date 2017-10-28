import React  from 'react';
import PropTypes from 'prop-types';

import mapStyle from "../../styles/map.json";



export default class GMap extends React.Component {


  componentDidMount() {
    const props = this.props;
    const map = new window.google.maps.Map(document.getElementById(this.props.mapID), {  // eslint-disable-line no-unused-vars
      center: {lat: parseInt(this.props.places[0].lat, 10), lng: parseInt(this.props.places[0].lng, 10)},
      zoom: this.props.zoom,
      mapTypeId: 'roadmap',
      styles: mapStyle
    });

    if (this.props.places.length > 1) {
      let origin = this.props.places[0].lat + ',' + this.props.places[0].lng;
      let destination = this.props.places[this.props.places.length - 1].lat + ',' + this.props.places[this.props.places.length - 1].lng;

      let tmpWaypoint = this.props.places.map(function(e){return e;});
      tmpWaypoint.splice((this.props.places.length-1), 1);
      tmpWaypoint.splice(0,1);
      let waypoints;

      if (tmpWaypoint.length > 0) {
        waypoints = tmpWaypoint.map((item) => {
          return {location: item.lat + ',' + item.lng};
        });
      }
      console.log(this.props.places);

      let dirService = new window.google.maps.DirectionsService();
      let dirRenderer = new window.google.maps.DirectionsRenderer({suppressMarkers: false});
      dirRenderer.setMap(map);
      let request = {
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        travelMode: "DRIVING"
      };
      dirService.route(request, function(result, status) {
        if (status === window.google.maps.DirectionsStatus.OK) {
          dirRenderer.setDirections(result);
          let route = result.routes[0];
          let distance = 0;
          for (var i = 0; i < route.legs.length; i++) {
            distance += route.legs[i].distance.value;
          }
          props.getDistance(distance/1000);
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
