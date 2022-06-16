import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import L from "leaflet";
import SearchControl from "./searchControl";
import "leaflet/dist/leaflet.css";
import "./map.css";
import useLocation from "./../../hooks/useLocation";
import mIcon from "./location-icon.png";
import { useSelector } from "react-redux";
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

const MapComponent = ({ destination }) => {
  const prov = OpenStreetMapProvider();
  // const [center, setCenter] = useState([13, 13]);
  const location = useLocation();
  const mapRef = useRef();
  const { trip } = useSelector(state => state.trip);
  const allVisitPlaces = trip.visitDays.map(day => day.visitPlaces).flat();

  console.log(allVisitPlaces);


  const ZOOM_LEVEL = 9;

  const showMyLocation = () => {
    console.log(location);
    if (location.loaded) {
      console.log("LOADED");
      mapRef.current.flyTo(
        [trip.destination?.latitude || 50, trip.destination?.longitude || 50],
        ZOOM_LEVEL,
        { animation: true }
      );
    }
  };

  useEffect(() => {
    showMyLocation();
  }, [trip.destination]);

  return (
    <div className="container-map">
      <MapContainer
        center={[50, 50]}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
        ref={mapRef}
      >
        <TileLayer
          attribution={osm.maptiler.attribution}
          url={osm.maptiler.url}
        />
        {location.loaded && trip.destination && (
          <>
            <Marker
              icon={makerIcon}
              position={[trip.destination?.latitude || 50, trip.destination?.longitude || 50]}
            >
              <Popup>{trip.destination?.address}</Popup>
            </Marker>
          </>
        )}
        {
          allVisitPlaces.length !== 0 && allVisitPlaces.map((p, index) => (
            <Marker
              key={index}
              icon={makerIcon}
              position={[p.latitude, p.longitude]}
            >
              <Popup>{p.address}</Popup>
            </Marker>
          ))
        }
        <SearchControl
          provider={prov}
          showMarker={false}
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
    </div >
  );
};

export default MapComponent;
