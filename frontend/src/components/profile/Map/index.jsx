import React from 'react'
import styles from './map.module.css'
import SectionContainer from '../SectionContainer'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import "leaflet/dist/leaflet.css";
import MapComponent from '../../map'



const Map = () => {
    return (
        <div>
            <SectionContainer>
                <div className={styles["map-title"]}>Travel Map</div>
                <div className={styles.map}>
                    <div className={styles.map} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                        <MapComponent/>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}

export default Map;
