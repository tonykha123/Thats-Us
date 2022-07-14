import React from 'react'

// COMPONENT IMPORTS:
import Hero from '../Hero/Hero'
import Events from '../EventsComponents/Events'

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-start ">
      <Hero />
      <Events />
    </main>
  )
}

export default Home
