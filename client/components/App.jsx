import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENT IMPORTS
import NavBar from './Nav/NavBar'
import Home from './Home/Home'


const App = () => {
  return (
    <>
      App
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </>
  )
}

export default App