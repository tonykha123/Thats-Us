import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: './images/placeholder.png',
  iconSize: [36, 36],
})

const position = [-36.86447, 174.7763]

function ResetCenterView(props) {
  const { coords } = props
  const map = useMap()
  console.log(coords, 'this be it')

  useEffect(() => {
    if (coords) {
      map.panTo(
        L.latLng(coords),
        map.getZoom(),

        {
          animate: true,
        }
      )
    }
  }, [coords])

  return null
}
// var latlng = L.latLng(50.5, 30.5);

const Map = ({ coords }) => {
  const [pin, setPin] = useState(position)

  useEffect(() => {
    return coords[0] == undefined ? setPin(position) : setPin(coords)
  }, [coords])

  return (
    <MapContainer
      center={pin}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: '300px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=VSPgWg7ngWDVEPAzEOVS"
      />
      <Marker position={pin} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
