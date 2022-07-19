import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: '/images/placeholder.png',
  iconSize: [36, 36],
})
const position = [-36.86447, 174.7763]

function ResetView({ coords }) {
  const map = useMap()

  useEffect(() => {
    if (coords) {
      map.setView(coords[0], coords[1], map.getZoom(), {
        animate: true,
      })
    }
  }, [coords])
}

const Map = ({ coords }) => {
  console.log(coords, 'coords map.jsx')
  const [pin, setPin] = useState(position)

  return (
    <MapContainer
      center={coords}
      zoom={9}
      scrollWheelZoom={false}
      className="w-full rounded-md shadow-xl md:w-11/12 h-[300px] md:h-[60vh] "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=VSPgWg7ngWDVEPAzEOVS"
      />
      <Marker position={coords} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
