import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: './images/placeholder.png',
  iconSize: [36, 36],
})

const position = [-36.86447, 174.7763]

const Map = () => {
  // const { coords } = props

  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={false}
      className="w-full  shadow-xl h-[270px] sm:h-[230px] md:h-[60vh]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
