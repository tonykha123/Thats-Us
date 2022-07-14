import React from 'react'
import SinglePastTile from './SinglePastTile'

const PastEvents = () => {
  const testData = [
    {
      event_id: 1,
      name: 'Tag',
      status: 'Past',
      date: '13/7/22',
      max: 12,
      description:
        'Tup for chill game of tag. Bring your own boots - water & food provided',
    },
    {
      event_id: 2,
      name: '3v3 B-ball',
      status: 'Up-coming',
      date: '13/7/22',
      max: 6,
      description: 'Keen for 3v3 game lets go',
    },
    {
      event_id: 3,
      name: 'Volley ball',
      status: 'Up-coming',
      date: '13/7/22',
      max: 12,
      description:
        'Looking for another team to join our tournament, beaches, balls & bikinis',
    },
  ]
  return (
    <div>
      PastEvents
      {testData.map((data) => (
        <SinglePastTile
          key={data.event_id}
          name={data.name}
          date={data.date}
          max={data.max}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default PastEvents
