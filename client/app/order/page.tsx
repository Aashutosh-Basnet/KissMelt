import React from 'react'
import StrawBerry from '../components/StrawBerry'
import Orders from './Orders'


const Page = () => {
  return (
    <div className='overflow-x-hidden'>
      <StrawBerry />
      <Orders />
    </div>
  )
}

export default Page