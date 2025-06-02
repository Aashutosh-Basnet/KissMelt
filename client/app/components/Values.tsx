import React from 'react'
import { GiChocolateBar } from "react-icons/gi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { GiStrawberry } from "react-icons/gi";
import { GiRoundStar } from "react-icons/gi";



const Values = () => {
  return (
    <div className='w-screen bg-pink-300 text-black p-10'>
      <div className='w-screen text-6xl font-bold my-5 p-5 flex justify-center'>
          OUR VALUES
      </div>
      <div className='flex flex-col w-screen items-center justify-center'>
          <div className='flex'>
            <div className='flex flex-col w-[40%] m-20 text-2xl font-light items-center'>
              <GiChocolateBar size={180} className='text-red-600'/>
              <h3 className='text-6xl font-bold'>PASSION</h3>
              <p className='max-w-[20vw] min-w-[20vw]'>We prioritize the highest quality in every aspect of our business, from the ingredients we select to the final presentation of our products.</p>
            </div>
            <div className='flex flex-col w-[40%] m-20 text-2xl font-light items-center'>
              <FaArrowsDownToPeople size={180} className='text-red-600'/>
              <h3 className='text-6xl font-bold'>CONNECTION</h3>
              <p className='max-w-[20vw] min-w-[20vw]'>Our customers are at the heart of everything we do. We strive to exceed expectations with every interaction and product.</p>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col w-[40%] m-20 text-2xl font-light items-center'>
              <GiStrawberry size={180} className='text-red-600'/>
              <h3 className='text-6xl font-bold'>PERSITENCE</h3>
              <p className='max-w-[20vw] min-w-[20vw]'>The commitment to our craft drives us to continually innovate and improve.</p>
            </div>
            <div className='flex flex-col w-[40%] m-20 text-2xl font-light items-center'>
              <GiRoundStar size={180} className='text-red-600'/>
              <h3 className='text-6xl font-bold'>INTEGRITY</h3>
              <p className='max-w-[20vw] min-w-[20vw]'>We conduct our business with honesty and transparency, building trust with our customers and community.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Values;