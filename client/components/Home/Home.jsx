import React from 'react'

// COMPONENT IMPORTS:
import Hero from '../Hero/Hero'
import Events from '../EventsComponents/Events'

const Home = () => {
  return (
    // outermost container
    <main className="w-full bg-neutral-400 flex flex-col items-center">
      <Hero />
      <Events />
    </main>
  )
}

export default Home
