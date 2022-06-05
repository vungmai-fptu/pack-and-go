import L from 'leaflet';

const iconMarker = new L.Icon({
    // iconUrl: require('./images/orange-marker.png'),
    // iconRetinaUrl: require('./images/orange-marker.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'marker-icon'
});

export { iconMarker };