import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
  iconUrl: '/images/placeholder.png',
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
    <div className="w-[65vw] h-[20vh]  sm:h-[25vh] md:h-[50vh] md:self-start">
      <MapContainer
        center={
          locationSelection[0] == undefined ? position : locationSelection
        }
        zoom={9}
        scrollWheelZoom={true}
        className="w-full h-full rounded-md shadow-xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=VSPgWg7ngWDVEPAzEOVS"
        />
        {selectPosition && (
          <Marker
            position={
              locationSelection[0] == undefined ? position : locationSelection
            }
            icon={icon}
          >
            <Popup></Popup>
          </Marker>
        )}
        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
    </div>
  )
}

export default Map
