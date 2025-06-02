import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='flex gap-4 mx-5'>
        <IoMail size={30}/>
        <FaFacebookF size={30}/>
        <RiInstagramFill size={30}/>
        <FaTiktok size={30}/>
    </div>
  )
}

export default Socials