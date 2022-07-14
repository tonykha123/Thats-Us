import React, { useState } from 'react'

const NavBar = () => {
  const [showAdmin, SetShowAdmin] = useState(false)

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
        <a className="mx-4 hover:text-white" href="https://www.google.com">
          Login
        </a>
        <a className="hover:text-white" href="https://www.google.com">
          Signup
        </a>
      </div>
    </nav>
  )
}

export default NavBar
