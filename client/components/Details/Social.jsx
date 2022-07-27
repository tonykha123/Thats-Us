import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { IoMailOutline } from 'react-icons/io5'

const Social = () => {
  return (
    <div className="flex flex-col ml-4">
      <p className="text-md font-semibold">Share With Friends</p>
      <div className="flex justify-start w-full gap-3">
        <a href="https://www.facebook.com/">
          <AiOutlineFacebook size={32} className="hover:text-gray-400" />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram size={30} className="hover:text-gray-400" />
        </a>
        <a href="https://www.twitter.com/">
          <FiTwitter size={32} className="hover:text-gray-400" />
        </a>
        <a href="https://gmail.com">
          <IoMailOutline size={30} className="hover:text-gray-400" />
        </a>
      </div>
    </div>
  )
}

export default Social
