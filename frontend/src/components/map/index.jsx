import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import L from "leaflet";
import SearchControl from "./searchControl";
import 'leaflet/dist/leaflet.css';
import "./map.css";
import useLocation from "./../../hooks/useLocation";
import mIcon from "./location-icon.png";
const osm = {
  maptiler: {
    url: "https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=rI9ODoaXGg1gJcIgQzh5",
    attribution: "MapTiler",
  },
};
const makerIcon = new L.Icon({
  iconUrl: mIcon,
  iconSize: [40, 40],
});
const MapComponent = () => {
  const prov = OpenStreetMapProvider();
  const [center, setCenter] = useState([13, 13]);
  const location = useLocation();
  const mapRef = useRef();

  console.log(location);
  const ZOOM_LEVEL = 13;

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      console.log(mapRef.current);
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animation: true }
      );
    }
  };

  useEffect(() => {
    showMyLocation();
  }, [location]);

  return (
    <div className="container">
      <MapContainer
        center={[location.coordinates.lat, location.coordinates.lng]}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
        ref={mapRef}
      >
        <TileLayer
          attribution={osm.maptiler.attribution}
          url={osm.maptiler.url}
        />
        {location.loaded && !location.error && (
          <Marker
            icon={makerIcon}
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Popup>Your location</Popup>
          </Marker>
        )}
        {/* <SearchControl
          provider={prov}
          showMarker={true}
          showPopup={false}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={1}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={true}
          searchLabel={"Enter address, please"}
          keepResult={true}
        /> */}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
