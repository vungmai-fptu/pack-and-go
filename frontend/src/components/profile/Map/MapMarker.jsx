import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { iconMarker } from './MapMarker.js'
import styles from './MapMarker.module.css'

const MapMarker = ({coordinates, order, message}) => {
    return (
        <div>
            <Marker className={styles.marker}
                position={coordinates}
                icon={iconMarker}
            >
                <p>{order}</p>
                <Popup>
                    {message}
                </Popup>
            </Marker>
        </div>
    )
}

export default MapMarker