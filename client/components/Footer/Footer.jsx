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
      <div className="w-10/12 flex flex-col items-center mx-auto lg:flex-row lg:items-start  lg:h-[25vh] lg:w-10/12 lg:justify ">
        {/* icons and p tag container*/}
        <div className="mt-6 w-10/12 flex flex-col items-center lg:items-center ">
          {/* logo goes here */}
          <p className="mb-4 text-lg font-medium">Follow Us</p>
          {/* icons container */}
          <div className="flex justify-between w-[25vw] lg:w-10/12 lg:justify-around">
            <a href="https://www.facebook.com/">
              <FaFacebookSquare size={30} className="hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram size={30} className="hover:text-gray-400" />
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitterSquare size={30} className="hover:text-gray-400" />
            </a>
            <a href="https://github.com/tonykha123/Thats-Us">
              <FaGithubSquare size={30} className="hover:text-gray-400" />
            </a>
          </div>
        </div>
        {/* About */}
        <div className="lg:ml-16 mt-6 w-10/12 text-align">
          <h6 className="text-lg font-medium text-gray-200 mb-4"> That's Us</h6>
          <ul className="">
            <li className="hover:text-gray-400 hover:underline mb-2">About</li>
            <li className="hover:text-gray-400 hover:underline mb-2">
              The Team
            </li>
            <li className="hover:text-gray-400 hover:underline mb-2">Blog</li>
            <li className="hover:text-gray-400 hover:underline mb-2">
              Careers
            </li>
          </ul>
        </div>
        {/* discover */}
        <div className="my-6 w-10/12 lg:ml-[-4rem]">
          <h6 className="text-lg font-medium text-gray-200 mb-4"> Discover</h6>
          <ul>
            <li className="hover:text-gray-400 hover:underline mb-2 ">
              Groups
            </li>
            <li className="hover:text-gray-400 hover:underline mb-2 ">Topic</li>
            <li className="hover:text-gray-400 hover:underline mb-2 ">
              Cities
            </li>
          </ul>
        </div>
      </div>
      <p className="text-md m-4">© 2022 That's Us</p>
    </footer>
  )
}

export default Footer
