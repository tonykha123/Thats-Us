import React from 'react'

const SinglePastTile = ({name, date, max, description}) => {
  return (
    <div>
      SinglePastTile
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{max}</p>
      <article>{description}</article>
    </div>
  )
}

export default SinglePastTile
