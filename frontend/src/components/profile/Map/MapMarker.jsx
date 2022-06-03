import React from 'react'
import { Marker } from 'react-leaflet'
import { iconMarker } from './MapMarker.js'
import Popup from 'reactjs-popup'
import './MapMarker.css'
const MapMarker = ({ coordinates, order, message }) => {
    return (
        <div>
            <Marker
                position={coordinates}
                icon={iconMarker}
            >
            </Marker>
            <Popup trigger={<Marker
                position={coordinates}
                icon={iconMarker}
            ></Marker>} position="right center">
                <div>{message}</div>
            </Popup>
        </div>
    )
}

export default MapMarker