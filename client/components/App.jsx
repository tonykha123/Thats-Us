import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENT IMPORTS
import NavBar from './Nav/NavBar'
import Home from './Home/Home'
import Details from './Details/Details'
import AddEvent from './EventsComponents/AddEvent/AddEvent'

const App = () => {
  return (
    <>
      {/* outer most container */}
      <div className="w-full bg-neutral-400 flex flex-col items-center">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/description" element={<Details />} />
            <Route path="/add" element={<AddEvent />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
