import React from 'react'
import { MdDirectionsBike } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'
import { FaWalking, FaBusAlt } from 'react-icons/fa'

const Directions = ({ event }) => {
  return (
    <div className="w-full flex flex-col items-center space-y-2">
      <div className="text-xl font-semibold  text-[#00AEFF] text-center">
        {event.name}
      </div>
      <p>at</p>
      <p className="text-lg font-semibold w-9/12">{event.display_name}</p>
      <div className="flex justify-center w-full space-x-4 mt-6">
        <a
          href={`https://maps.google.com/?daddr=${event.coordsX},${event.coordsY}&dirflg=w`}
          target="_blank"
        >
          <FaWalking size={32} className="hover:text-gray-400 " />
        </a>

        <a
          href={`https://maps.google.com/?daddr=${event.coordsX},${event.coordsY}&dirflg=bike`}
          target="_blank"
        >
          <MdDirectionsBike size={30} className="hover:text-gray-400 " />
        </a>
        <a
          href={`https://maps.google.com/?daddr=${event.coordsX},${event.coordsY}&dirflg=d`}
          target="_blank"
        >
          <AiFillCar size={32} className="hover:text-gray-400 " />
        </a>
        <a
          href={`https://maps.google.com/?daddr=${event.coordsX},${event.coordsY}&dirflg=transit`}
          target="_blank"
        >
          <FaBusAlt size={30} className="hover:text-gray-400 " />
        </a>
      </div>
      <div></div>
    </div>
  )
}

export default Directions
