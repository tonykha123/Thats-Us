import React from 'react'

export const SingleUpcomingTile = ({
  name,
  date,
  max,
  description,
  showEvent,
}) => {
  return (
    // each card
    <div
      onClick={showEvent}
      className="h-[20vh] bg-white w-[70vw] sm:w-[30vw] sm:h-[30vh] lg:w-[20vw] sm:mx-5 p-4 mx-auto my-4 flex flex-col items-center rounded-md shadow-xl hover:scale-105 duration-300 "
    >
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="self-start my-2">
        {date} {max} players
      </p>
      <article className="self-start my-1">{description}</article>
    </div>
  )
}
