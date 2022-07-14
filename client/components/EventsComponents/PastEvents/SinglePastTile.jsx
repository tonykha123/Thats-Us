import React from 'react'

const SinglePastTile = ({name, date, max, description}) => {
  return (
    <div style={{margin: '2em'}}>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{max} players</p>
      <article>{description}</article>
    </div>
  )
}

export default SinglePastTile
