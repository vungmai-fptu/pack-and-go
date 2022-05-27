import React from 'react'
import { Marker, Popup } from 'react-leaflet'

const MapMarker = ({coordinates, order, message}) => {
    return (
        <div>
            <Marker
                position={coordinates}
                order={order}
            >
                <Popup>
                    {message}
                </Popup>
            </Marker>
        </div>
    )
}

export default MapMarker