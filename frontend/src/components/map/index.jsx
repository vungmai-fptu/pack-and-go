import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import SearchControl from "./searchControl";
import 'leaflet/dist/leaflet.css';
import "./map.css";
const MapComponent = () => {
  const prov = OpenStreetMapProvider();

  return (
    <div className="map-wrapper">
      <MapContainer center={[12, 110]} zoom={9} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <SearchControl
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
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
