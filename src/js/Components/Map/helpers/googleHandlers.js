const iconBase = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|';

const icon = (color) => {
  return ({
    url: iconBase + '' + color,
    size: new window.google.maps.Size(30, 50),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(10, 50),
    scaledSize: new window.google.maps.Size(25, 40),
  });
};

export function addMarker(map, position, iconColor) {
  const newMarker = new window.google.maps.Marker({
    map: map,
    icon: icon(iconColor),
    title: position.name || null,
    position: position.geometry.location || position,
    animation: window.google.maps.Animation.DROP
  });
}
