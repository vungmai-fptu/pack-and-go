import L from 'leaflet';
import locationIcon from '../../../assets/images/green-marker.png';

const iconMarker = new L.Icon({
    iconUrl: locationIcon,
    iconRetinaUrl: locationIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'marker-icon'
});

export { iconMarker };