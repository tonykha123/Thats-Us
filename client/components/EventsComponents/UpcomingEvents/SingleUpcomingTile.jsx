import React from 'react'


export const SingleUpcomingTile = ({name, date, max, description}) => {
  return <div>SingleUpcomingTile
    <h2>{name}</h2>
    <p>{date}</p>
    <p>{max}</p>
    <article>{description}</article>
  </div>
}

