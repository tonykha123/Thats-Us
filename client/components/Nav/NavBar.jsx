import React, { useState } from 'react'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../Authenticated/Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, useNavigate } from 'react-router-dom'
import { MdLogin, MdLogout } from 'react-icons/md'

const NavBar = () => {
  // const [showAdmin, SetShowAdmin] = useState(false)
  // TODO: call the useAuth0 hook and destructure logout and loginWithRedirect
  const navigate = useNavigate()
  const { logout, loginWithRedirect } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()

    return logout()
  }

  function handleSignup(e) {
    e.preventDefault()

    return loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleLogin(e) {
    e.preventDefault()

    return loginWithRedirect()
  }

  return (
    <nav className="w-full h-[75px] flex flex-row justify-between p-5 items-center bg-slate-600">
      <div
        className="w-20 h-auto hover:animate-pulse hover:cursor-pointer "
        onClick={() => navigate('/')}
      >
        <img src="/images/THAT'S.svg" alt="Logo" className=""></img>
      </div>
      {/* right side nav   */}
      <div>
        <div className="flex flex-row-reverse space-x-4">
          <IfNotAuthenticated>
            <MdLogin
              size={28}
              className="hover:text-gray-400"
              onClick={handleLogin}
            />
            <a
              onClick={handleSignup}
              className="hover:text-white"
              href="/register"
            >
              Signup
            </a>
          </IfNotAuthenticated>
        </div>
        <IfAuthenticated>
          <MdLogout
            size={28}
            className="hover:text-gray-400"
            onClick={handleLogoff}
          />
          {/* <a
            onClick={handleLogoff}
            className="hover:text-white"
            href="https://www.google.com"
          >
            Log off
          </a> */}
        </IfAuthenticated>
      </div>
    </nav>
  )
}

export default NavBar
