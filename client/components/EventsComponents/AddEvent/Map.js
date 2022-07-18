import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: './images/placeholder.png',
  iconSize: [36, 36],
})

const position = [-36.86447, 174.7763]

const Map = () => {
  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: '65%', height: '65%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=VSPgWg7ngWDVEPAzEOVS"
      />
      <Marker position={position} icon={icon}>
        <Popup>chur chur</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
