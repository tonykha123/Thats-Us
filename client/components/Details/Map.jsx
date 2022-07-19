import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: '/images/placeholder.png',
  iconSize: [36, 36],
})
const position = [-36.86447, 174.7763]

// const ResetCenterView = ({ coords }) => {
//   const [view, setView] = useState(position)
//   const map = useMap()
//   console.log(coords, 'MODEL OBJ')

//   useEffect(() => {
//     if (coords) {
//       map.setView(L.latLng(coords?.[0], coords?.[1]), map.getZoom(), {
//         animate: true,
//       })
//     }
//   }, [coords])

//   return null
// }
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

  // useEffect(() => {
  //   if (coords)
  //     return coords[0] == undefined ? setPin(position) : setPin(coords)
  // }, [coords])

  // useEffect(() => {
  //   if (coords[0] != undefined) {
  //     resetView()
  //   } else {
  //     return
  //   }
  // }, [])

  // console.log(setView(coords))

  return (
    <MapContainer
      center={coords}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: '300px' }}
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
      {/* <ResetCenterView coords={coords} /> */}
      {/* <ResetView selectPosition={coords} /> */}
    </MapContainer>
  )
}

export default Map
