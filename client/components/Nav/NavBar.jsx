import React, { useState } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated/Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'



const NavBar = () => {
  const [showAdmin, SetShowAdmin] = useState(false)
  // TODO: call the useAuth0 hook and destructure logout and loginWithRedirect
  const {logout, loginWithRedirect} = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    console.log('log off')
    return logout()
  }

  function handleSignup(e) {
    e.preventDefault()
    console.log('register')
    return loginWithRedirect({
      redirectUri:`${window.location.origin}/register` 
  })
  }

  function handleLogin(e) {
    e.preventDefault()
    console.log('sign in')
    return loginWithRedirect()
  }

  return (
    <nav className="w-full h-[75px] flex flex-row justify-between p-5 bg-slate-600">
      {/* left side nav */}
      {/* insert logo maybe */}
      <div className="flex">
        <div
          className="hover:text-white cursor-pointer"
          onClick={() => {
            SetShowAdmin(!showAdmin)
          }}
        >
          X
        </div>
        {/* transition in softly */}
        {showAdmin && (
          <a className=" hover:text-white mx-4 " href="https://www.google.com">
            Your Events
          </a>
        )}
      </div>
      {/* right side nav   */}
      <div>
<<<<<<< HEAD
        <a className="mx-4 hover:text-white">
          Home
        </a>
        <a className="mx-4 hover:text-white" href="https://www.google.com">
=======
        <IfNotAuthenticated>          
        <a onClick={handleLogin} className="mx-4 hover:text-white" href="https://www.google.com">
>>>>>>> 344f2afcc6eff4c7265a13ba6c8a2f7ae14ccaee
          Login
        </a>
        <a onClick={handleSignup} className="hover:text-white" href="/register">
          Signup
        </a>
        </IfNotAuthenticated>
        <IfAuthenticated>
        <a onClick={handleLogoff} className="hover:text-white" href="https://www.google.com">
          Log off
        </a>
        </IfAuthenticated>
      </div>
    </nav>
  )
}

export default NavBar
