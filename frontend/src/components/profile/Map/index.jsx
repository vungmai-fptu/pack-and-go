import React from 'react'
import styles from './map.module.css'
import SectionHeader from '../SectionHeader'
import SectionContainer from '../SectionContainer'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from 'react-leaflet'
import {GrLocation} from 'react-icons/gr'

import L from 'leaflet';
import MapMarker from './Marker'



const Map = () => {
    return (
        <div>
            <SectionContainer>
                <div className={styles["map-title"]}>Travel Map</div>
                <div className={styles.map}>
                    <MapContainer className={styles.map} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MapMarker 
                            type="minor"
                            coordinates={[51.505, -0.09]}
                            order={1}
                            message="here"
                        />
                    </MapContainer>
                </div>
            </SectionContainer>
        </div>
    );
}

export default Map;
