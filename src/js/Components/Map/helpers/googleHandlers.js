import { get } from 'lodash';
import mapStyle from '../../../../styles/map.json';

export const iconBase = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|';
const icon = (color) => {
  return ({
    url: iconBase + '' + color,
    size: new window.google.maps.Size(30, 50),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(10, 50),
    scaledSize: new window.google.maps.Size(25, 40),
  });
};

export function createMap(mapID, places, zoom) {
  const map = new window.google.maps.Map(document.getElementById(mapID), { // eslint-disable-line no-unused-vars
    center: {
      lat: parseInt(places[0].gcords.lat, 10),
      lng: parseInt(places[0].gcords.lng, 10)
    },
    zoom: zoom,
    mapTypeId: 'roadmap',
    styles: mapStyle,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true
  });
  return map;
}

export function addMarker(map, position = null, iconColor, eventType = null) {
  const newMarker = new window.google.maps.Marker({
    map: map,
    icon: icon(iconColor),
    title: position.name || null,
    position: get(position, 'geometry.location', null) || position,
    animation: window.google.maps.Animation.DROP
  });
  if (eventType) {

  }
  return newMarker;
}

export function displayLocationElevation(location) {
  let attitude = 0;
  const elevator = new window.google.maps.ElevationService;
  elevator.getElevationForLocations({
    'locations': [location]
  }, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        attitude = results[0].elevation;
        console.log('attitude1', parseInt(attitude));
        return results[0].elevation;
      } else {
        attitude = 'No results found';
      }
    } else {
      attitude = 'Elevation service failed due to: ' + status;
    }
  });
  
  console.log('attitude2', parseInt(attitude));
  return parseInt(attitude);
  
  
}

export function createLatLngObject(lat, lng) {
  return(new window.google.maps.LatLng(lat, lng));
}