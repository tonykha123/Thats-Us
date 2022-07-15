import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// AUTH0 IMPORTS:
import { cacheUser } from '../auth0-utils'

import { useAuth0 } from '@auth0/auth0-react'

// COMPONENT IMPORTS
import NavBar from './Nav/NavBar'
import Register from './Register/Register'
import Home from './Home/Home'
import Details from './Details/Details'

const App = () => {
  cacheUser(useAuth0)
  return (
    <>
      {/* outer most container */}
      <div className="w-full bg-neutral-400 flex flex-col items-center">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/description" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
