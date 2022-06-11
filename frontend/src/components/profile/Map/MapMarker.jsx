import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { iconMarker } from './MapMarker.js'
import './MapMarker.css'

const MapMarker = ({ coordinates, order, message }) => {
    return (
        <div>
            <Marker position={coordinates} icon={iconMarker}>
                <Popup>
                    {message}
                </Popup>
            </Marker>
        </div>
    )
}

export default MapMarker