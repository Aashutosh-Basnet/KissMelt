"use client"

import React, { useState } from 'react'
import PickUpCard from './PickUpCard'

const Pickup = () => {
  const [isPickupCardOpen, setIsPickupCardOpen] = useState(false);

  const handleChangeClick = () => {
    setIsPickupCardOpen(true);
  };

  const handleClosePickupCard = () => {
    setIsPickupCardOpen(false);
  };

  return (
    <>
      <div className='bg-red-600  px-4 overflow-x-hidden'>
          <div className='flex items-center gap-4'>
              <p className='text-red-200 text-sm md:text-sm font-extralight'>Pickup from 5646 Bay Street</p>
              <button 
                onClick={handleChangeClick}
                className='bg-red-500 text-white px-6 py-3 rounded-full text-lg md:text-sm font-bold hover:bg-red-400'
              >
                Change
              </button>
          </div>
          <p className='text-red-300 text-lg md:text-sm'>Tomorrow at 12:45 PM</p>
      </div>
      
      <PickUpCard 
        isOpen={isPickupCardOpen} 
        onClose={handleClosePickupCard} 
      />
    </>
  )
}

export default Pickup