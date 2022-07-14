import React from 'react'

export const SingleUpcomingTile = ({ name, date, max, description }) => {
  return (
    <div className=" h-auto bg-white w-10/12 p-2 mx-auto my-4">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{max} players</p>
      <article>{description}</article>
    </div>
  )
}
