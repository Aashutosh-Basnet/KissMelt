import React from 'react'
import { GiChocolateBar } from "react-icons/gi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { GiStrawberry } from "react-icons/gi";
import { GiRoundStar } from "react-icons/gi";

import {Playfair, Manrope} from 'next/font/google';

const playfair = Playfair({
  weight: '900',
  subsets: ['latin']
});

const manrope = Manrope({
  subsets: ['latin']
});


const Values = () => {
  return (
    <div className={`w-screen bg-pink-300 text-black p-10 ${manrope.className}`}>
      <div className={`w-screen text-4xl font-bold p-5 flex justify-center ${playfair.className}`}>
          OUR VALUES
      </div>
      <div className='flex flex-col w-screen items-center justify-center'>
          <div className='flex text-center'>
            <div className='flex flex-col w-[40%] m-10 text-2xl font-light items-center'>
              <GiChocolateBar size={180} className='text-[rgb(255,0,0)]'/>
              <h3 className={`text-3xl font-bold ${playfair.className}`}>PASSION</h3>
              <p className='max-w-[20vw] text-lg min-w-[20vw]'>We prioritize the highest quality in every aspect of our business, from the ingredients we select to the final presentation of our products.</p>
            </div>
            <div className='flex flex-col w-[40%] m-10 text-2xl font-light items-center'>
              <FaArrowsDownToPeople size={180} className='text-[rgb(255,0,0)]'/>
              <h3 className={`text-3xl font-bold ${playfair.className}`}>CONNECTION</h3>
              <p className='max-w-[20vw] text-lg min-w-[20vw]'>Our customers are at the heart of everything we do. We strive to exceed expectations with every interaction and product.</p>
            </div>
          </div>
          <div className='flex text-center'>
            <div className='flex flex-col w-[40%] m-10 text-2xl font-light items-center'>
              <GiStrawberry size={180} className='text-[rgb(255,0,0)]'/>
              <h3 className={`text-3xl font-bold ${playfair.className}`}>PERSITENCE</h3>
              <p className='max-w-[20vw] text-lg min-w-[20vw]'>The commitment to our craft drives us to continually innovate and improve.</p>
            </div>
            <div className='flex flex-col w-[40%] m-10 text-2xl font-light items-center'>
              <GiRoundStar size={180} className='text-[rgb(255,0,0)]'/>
              <h3 className={`text-3xl font-bold ${playfair.className}`}>INTEGRITY</h3>
              <p className='max-w-[20vw] text-lg min-w-[20vw]'>We conduct our business with honesty and transparency, building trust with our customers and community.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Values;