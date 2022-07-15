import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENT IMPORTS
import NavBar from './Nav/NavBar'
import Home from './Home/Home'
import Details from './Details/Details'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Details />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
