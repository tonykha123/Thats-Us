import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer
      center={[-36.86447, 174.7763]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: '300px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default Map
