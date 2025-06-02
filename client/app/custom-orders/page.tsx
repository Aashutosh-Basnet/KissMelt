import React from 'react';
import CustomOrder from '../components/CustomOrder';
import { price } from '../data/products';
import Image from 'next/image';

import { Playfair_Display, Manrope } from 'next/font/google'

const playfair = Playfair_Display({
  weight: '900',
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})

const Page = () => {
  return (
    <div className="overflow-x-hidden">
        <div className='flex flex-col md:flex-row'>
          <div className='rounded-3xl p-5 m-10'>
            <Image src="/images/custom_orders.webp" alt='' height={1400} width={1900}
              className='rounded-3xl'
            />
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-[80%] mx-auto text-center'>
            <h3 className={`text-2xl md:text-3xl ${playfair.className} w-full`}>CUSTOM ORDERS</h3>
            <p className={`text-md md:text-lg ${manrope.className}`}>Custom orders must be placed at least 3 weeks in advance and up to 90 days in advance. Please select the date and time you would like to pick up your order at checkout.</p>
            <p className={`text-md md:text-lg ${manrope.className} my-10`}>Thank you for your patience!</p>
            </div>
          </div>
        </div>
      <div className="flex flex-col gap-8">
        {Object.entries(price).map(([category, data]) => (
          <div key={category} className={`${data.bg}`}>
            <h1 className={`text-3xl font-bold text-center my-8 ${playfair.className} text-black`}>
              {category.replace(/_/g, ' ')}
            </h1>
            <div className="py-8 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-2 max-w-6xl mx-auto">
                {Object.entries(data.items).map(([itemKey, item]) => (
                  <CustomOrder
                    key={itemKey}
                    title={itemKey}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
