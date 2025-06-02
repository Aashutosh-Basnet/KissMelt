import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='flex items-center gap-4 mx-5'>
        <IoMail size={16}/>
        <FaFacebookF size={16}/>
        <RiInstagramFill size={16}/>
        <FaTiktok size={16}/>
    </div>
  )
}

export default Socials