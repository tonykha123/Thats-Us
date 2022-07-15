import React from 'react'

const SingleLiveTile = ({ name, date, max, description }) => {
  return (
    // each card
    <div className="h-[20vh] bg-white w-[70vw] sm:w-[30vw] sm:h-[30vh] lg:w-[250px] lg:h-[250px] sm:mx-5 p-4 mx-auto my-4 flex flex-col items-center rounded-md shadow-xl hover:scale-105 duration-300">
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="self-start my-2">
        {date} {max} players
      </p>
      <article className="self-start my-1">{description}</article>
    </div>
  )
}

export default SingleLiveTile
