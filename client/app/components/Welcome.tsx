import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import { Playfair_Display, Manrope } from 'next/font/google'

const playfair = Playfair_Display({
  weight: '700',
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})

const Welcome = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full min-h-screen bg-pink-300 text-black'>
      {/* Image Container */}
      <div className='w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-0'>
        <Image
          src="/images/welcome.webp"
          alt='Dipped treats showcase' 
          width={1000} 
          height={600} 
          className='rounded-3xl w-full max-w-[90%] lg:max-w-[92%] h-auto object-cover lg:m-14 lg:my-24'
          priority
        />
      </div>

      <div className='w-full lg:w-1/2 flex flex-col justify-center px-6 py-8 lg:p-0'>
        <div className='max-w-[90%] lg:max-w-[80%] mx-auto lg:ml-0 lg:mr-10'>
          <h2 className={`text-4xl md:text-xl lg:text-4xl m-8 font-bold text-center lg:text-left ${playfair.className}`}>
            WELCOME TO KissMelt
          </h2>
          <div className='space-y-6'>
            <p className={`text-md  md:text-md font-light ${manrope.className}`}>
              Where confectionery craftsmanship and innovation meet. We specialize in handcrafted delights that blend tradition with creativity, ranging from caramel apples and chocolate-dipped strawberries to cheesecake bites and other decadent chocolate-dipped treats.
            </p>
            <p className={`text-md  md:text-md font-light ${manrope.className}`}>
              At KissMelt, we take pride in every detail. Each creation is meticulously handcrafted in small batches. What began in a humble home kitchen has flourished into a dedication to quality and a passion for chocolate dipping. Come see the artistry that defines Dipped!
            </p>
          </div>
          <div className='mt-8 flex justify-center lg:justify-start'>
            <Button text="View products"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome