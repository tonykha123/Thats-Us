import React from 'react'

export const SingleUpcomingTile = ({ name, date, max, description }) => {
  return (
    // each card
    <div className=" h-[20vh] bg-white w-[85vw] p-4 mx-auto my-4 flex flex-col items-center rounded-md shadow-xl hover:scale-110 duration-300">
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="self-start my-2">
        {date} {max} players
      </p>
      <article className="self-start my-1">{description}</article>
    </div>
  )
}
