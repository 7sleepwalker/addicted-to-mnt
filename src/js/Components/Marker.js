import { Component } from 'react';
import PropTypes from 'prop-types';


export default class Marker extends Component {
  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position) ||
      (this.props.icon !== prevProps.icon)) {
        if (this.marker) {
            this.marker.setMap(null);
        }
        this.renderMarker();
    }
  }
  componentWillUnmount() {
    if (this.marker) {
      this.marker.setMap(null);
    }
  }


  renderMarker() {
      let {
        map, google, position, mapCenter, icon, label, draggable, title
      } = this.props;
      if (!google) {
        return null
      }

      let pos = position || mapCenter;
      if (!(pos instanceof google.maps.LatLng)) {
        position = new google.maps.LatLng(pos.lat, pos.lng);
      }

      const pref = {
        map: map,
        position: position,
        icon: icon,
        label: label,
        title: title,
        draggable: draggable
      };
      this.marker = new google.maps.Marker(pref);

    }



  render() {
    return null;
  }
}

Marker.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
}

Marker.defaultProps = {
  name: 'Marker'
}
