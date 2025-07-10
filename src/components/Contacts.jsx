import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
export default function Contacts() {
  return (
    <div className='text-white border-gray-200 p-2 flex  gap-10 mt-10' id='contact'>
      <CiFacebook />
      <FaXTwitter />
      <CiLinkedin />
      <FaInstagram />
    </div>
  )
}

