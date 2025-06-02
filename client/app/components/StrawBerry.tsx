import React from 'react'
import Image from 'next/image'

import { Playfair_Display, Manrope } from 'next/font/google'

const playfair = Playfair_Display({
  weight: '900',
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})

const StrawBerry = () => {
  return (
    <div className={`${manrope.className} text-3xl flex font-extralight`}>
    <div className='w-[50vw] text-black bg-white'>
        <div className={`${playfair.className} text-6xl m-5 my-8 mt-16 text-red-500`}>STRAWBERRY CUPS</div>
        <div className='m-5 my-8'>
            <p className='font-medium'>Bay Street Emeryville Strawberry Cup Station Hours:</p>
            <p>Monday-Friday 1pm-Close</p>
            <p>Saturday-Sunday 12pm-Close</p>
        </div>
        <div className='m-5 my-8'>
            <p className='font-medium'>Arden Fair Mall Strawberry Cup Station Hours:</p>
            <p>Monday-Saturday 11am-Close</p>
            <p>Sunday 12pm-Close</p>
        </div>
        <div className='m-5 my-8 w-[80%]'>
            <p className='my-8'>Our version of chocolate strawberry cups stays true to the original creators from London and NYC by using chocolate. Chocolate will harden within a couple of minutes from the moment it is poured.</p>
            <p className='my-8'>We do NOT use a chocolate ganache, fudge, or syrup that may used in other variations. If you will not be satisfied with chocolate hardening within a couple of minutes, we recommend choosing another treat. Thank you!</p>
            <i className='block my-10 font-medium'>We are currently not accepting online orders for our Arden Fair location. Item prices vary by location.</i>
        </div>
    </div>
    <div className='w-[50vw]'>
      <Image src = "/images/strawberry.png" alt='alt_image' width={1595} height={955}/>
    </div>
    </div>
  )
}

export default StrawBerry