import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    // main footer container
    <footer className="w-full bg-gray-600 text-gray-300">
      {/* Everything container */}
      <div className="w-10/12 flex flex-col items-center mx-auto ">
        {/* icons and p tag container*/}
        <div className="mt-6 w-10/12 flex flex-col items-center">
          {/* logo goes here */}
          <p className="mb-4 text-lg font-medium">Follow Us</p>
          {/* icons container */}
          <div className="flex justify-between w-full">
            <a href="https://www.facebook.com/">
              <FaFacebookSquare size={30} className="" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram size={30} className="" />
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitterSquare size={30} className="" />
            </a>
            <a href="https://github.com/matai-2022/Player-finder">
              <FaGithubSquare size={30} className="" />
            </a>
          </div>
        </div>
        {/* About */}
        <div className="mt-6 w-10/12 text-align">
          <h6 className="text-lg font-medium text-gray-200"> That's Us</h6>
          <ul className="">
            <li className="hover:text-gray-400 hover:underline">About</li>
            <li className="hover:text-gray-400 hover:underline">The Team</li>
            <li className="hover:text-gray-400 hover:underline">Blog</li>
            <li className="hover:text-gray-400 hover:underline">Careers</li>
          </ul>
        </div>
        {/* discover */}
        <div className="my-6 w-10/12">
          <h6 className="text-lg font-medium text-gray-200"> Discover</h6>
          <ul>
            <li className="hover:text-gray-400 hover:underline">Groups</li>
            <li className="hover:text-gray-400 hover:underline">Topic</li>
            <li className="hover:text-gray-400 hover:underline">Cities</li>
          </ul>
        </div>
      </div>
      <p className="text-md">© 2022 That's Us</p>
    </footer>
  )
}

export default Footer
