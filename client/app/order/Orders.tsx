import React from 'react';
import OrderCard from '../components/ui/OrderCard';
import { orders } from '../data/orders';

import { Playfair_Display, Manrope } from 'next/font/google'

const playfair = Playfair_Display({
  weight: '900',
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})

const Orders = () => {
  return (
    <div className={`w-screen mx-auto px-4 py-8 bg-white text-black ${manrope.className}`}>
        {/* Catering and Party Packs */}
        <section className='mb-12'>
          <h2 className={`text-6xl text-red-600 font-extrabold mb-6 ${playfair.className}`}>Catering and Party Packs</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Object.values(orders.catering_and_party_packs).map((item, index) => (
              <OrderCard
                key={index}
                image={item.img_src || '/placeholder.jpg'}
                title={item.title}
                description=""
                price={item.price}
              />
            ))}
          </div>
        </section>

        {/* Apples */}
        <section className='mb-12'>
          <h2 className={`text-6xl text-red-600 font-extrabold mb-6 ${playfair.className}`}>Apples</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Object.values(orders.Apples).map((item, index) => (
              <OrderCard
                key={index}
                image={item.img_src || '/placeholder.jpg'}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </section>

        {/* Cheesecakes */}
        <section className='mb-12'>
          <h2 className={`text-6xl text-red-600 font-extrabold mb-6 ${playfair.className}`}>Cheesecakes</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Object.values(orders.cheesecakes).map((item, index) => (
              <OrderCard
                key={index}
                image={item.img_src || '/placeholder.jpg'}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </section>

        {/* Oreos */}
        <section className='mb-12'>
          <h2 className={`text-6xl text-red-600 font-extrabold mb-6 ${playfair.className}`}>Oreos</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Object.values(orders.oreos).map((item, index) => (
              <OrderCard
                key={index}
                image={item.img_src || '/placeholder.jpg'}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </section>

        {/* Pretzels */}
        <section className='mb-12'>
          <h2 className={`text-6xl text-red-600 font-extrabold mb-6 ${playfair.className}`}>Pretzels</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Object.values(orders.pretzels).map((item, index) => (
              <OrderCard
                key={index}
                image={item.img_src || '/placeholder.jpg'}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </section>

        {/* Marshmallows and Rice Krispies */}
        <section className='mb-12'>
          <h2 className={`text-6xl text-red-600 font-extrabold mb-6 ${playfair.className}`}>Marshmallows & Rice Krispies</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Object.values(orders.Marshmallows_rice_krispies).map((item, index) => (
              <OrderCard
                key={index}
                image={item.img_src || '/placeholder.jpg'}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </section>
      </div>
  )
}

export default Orders