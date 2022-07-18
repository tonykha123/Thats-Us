import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: './images/placeholder.png',
  iconSize: [36, 36],
})

const position = [-36.86447, 174.7763]

function ResetCenterView(props) {
  const { selectPosition } = props
  const map = useMap()

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      )
    }
  }, [selectPosition])

  return null
}

const Map = (props) => {
  const { selectPosition } = props
  const locationSelection = [selectPosition?.lat, selectPosition?.lon]

  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={true}
      className="w-[65vw] h-[50vw]"
      // style={{ height: '100%', width: '100%' }
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=VSPgWg7ngWDVEPAzEOVS"
      />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup></Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  )
}

export default Map
