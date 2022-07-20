import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ThanksForAttending() {
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setTimeout(() => {
      navigate(`/event/${id}`)
    }, 2000)
  }, [])

  return (
    <section className="w-full h-[65vh] md:bg-slate-100 md:h-[70vh] ">
      <div className="w-full h-[50vh] flex flex-col  items-center mx-auto md:w-9/12 md:bg-white md:h-full md:shadow-xl md:rounded-md md:border">
        <p className="text-2xl mt-20 mx-auto">
          Thanks for attending this event! <br />{' '}
          <span className="text-[#00AEFF] font-semibold">That's Us </span>💯
        </p>
      </div>
    </section>
  )
}

export default ThanksForAttending
