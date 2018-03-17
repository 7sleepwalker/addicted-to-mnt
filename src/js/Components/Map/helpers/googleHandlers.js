import { get } from 'lodash';
import mapStyle from "../../../../styles/map.json";

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
      lat: parseInt(places[0].lat, 10),
      lng: parseInt(places[0].lng, 10)
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
