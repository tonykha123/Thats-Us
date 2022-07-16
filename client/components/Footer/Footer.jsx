import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/FaFacebookSquare'

const Footer = () => {
  return (
    // main footer container
    <footer className="flex flex-col items-center">
      {/* icons left side*/}
      <div className="mt-6">
        <p>Follow Us</p>
        <div className="flex justfy-between">
          <FaFacebookSquare size={30} className="text-red-500" />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      {/* About */}
      <div className="mt-6">
        <h6> That's Us</h6>
        <ul>
          <li>About</li>
          <li>The Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      {/* discover */}
      <div className="my-6">
        <h6> Discover</h6>
        <ul>
          <li>Groups</li>
          <li>Topic</li>
          <li>Cities</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
