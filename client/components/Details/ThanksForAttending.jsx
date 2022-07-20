import React, {useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function ThanksForAttending() {
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(()=> {
    setTimeout(() => {
      navigate(`/event/${id}`)
    },2000)
  },[])

  return <>
    <p>Thanks for attending this event! <br/> That's Us 💯</p>
  </>
}

export default ThanksForAttending