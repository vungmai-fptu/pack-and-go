import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import useLocation from "./../../hooks/useLocation";
import mIcon from "../../assets/images/location-icon.png";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
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
const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    & .leaflet-container {
        height: 100%;
        width: 100%;
    }
`;
const NotificationMap = ({ destination, zoom }) => {
    const location = useLocation();
    const mapRef = useRef();
    const dispatch = useDispatch();


    const showMyLocation = () => {
        if (location.loaded) {
            mapRef.current.flyTo(
                [destination?.latitude || 50, destination?.longitude || 50],
                zoom,
                { animation: true }
            );
        }
    };

    useEffect(() => {
        showMyLocation();
    }, [destination]);

    return (
        <Wrapper>
            <MapContainer
                center={[50, 50]}
                zoom={zoom}
                scrollWheelZoom={true}
                ref={mapRef}
            >
                <TileLayer
                    attribution={osm.maptiler.attribution}
                    url={osm.maptiler.url}
                />
                {destination && (
                    <>
                        <Marker
                            icon={makerIcon}
                            position={[
                                destination?.latitude || 50,
                                destination?.longitude || 50,
                            ]}
                        >
                            <Popup>{destination?.address}</Popup>
                        </Marker>
                    </>
                )}
                {
                    location.loaded && !location.error &&

                    <Marker
                        icon={makerIcon}
                        position={[
                            location.coordinates.lat || 50,
                            location.coordinates.long || 50,
                        ]}
                    >
                        <Popup>Your location</Popup>
                    </Marker>

                }
            </MapContainer>
        </Wrapper>
    );
};

export default NotificationMap;
