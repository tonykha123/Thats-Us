import React from 'react'

const SinglePastTile = ({ name, date, max, description, showEvent }) => {
  return (
    // each card
    <div
      onClick={showEvent}
      className=" h-[20vh] bg-white w-[85vw] sm:w-[50vw] sm:h-[30vh] sm:mx-5 p-4 mx-auto my-4 flex flex-col items-center rounded-md shadow-xl hover:scale-105 duration-300"
    >
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="self-start my-2">
        {date} {max} players
      </p>
      <article className="self-start my-1">{description}</article>
    </div>
  )
}

export default SinglePastTile
