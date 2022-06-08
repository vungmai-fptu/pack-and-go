import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import SearchControl from "./searchControl";
import "./map.css";
const MapComponent = () => {
  const prov = OpenStreetMapProvider();

  return (
    <div>
      <MapContainer center={[12, 110]} zoom={13}>
        <TileLayer attribution="long" url="/" />
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
