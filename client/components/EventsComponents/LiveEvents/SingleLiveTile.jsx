import React from 'react'

const SingleLiveTile = ({ name, date, max, description }) => {
  return (
    <div>
      SingleLiveTile
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{max}</p>
      <article>{description}</article>
    </div>
  )
}

export default SingleLiveTile
