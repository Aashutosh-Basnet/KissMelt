import Image from 'next/image'

type OrderCardProps = {
    image: string,
    title: string,
    description: string,
    price: string
} 

import { Playfair_Display, Manrope } from 'next/font/google'

const playfair = Playfair_Display({
  weight: '900',
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})

const OrderCard = (props: OrderCardProps) => {
  return (
    <div className='border-1 border-red-500 rounded-2xl flex flex-col text-black'>
        <div>
            <Image src={props.image} alt='' height={900} width={900} />
        </div>
        <div className='flex flex-col text-md p-4'>
            <p className={` ${playfair.className} text-lg font-medium`}>{props.title}</p>
            {props.description && <p className={`${manrope.className}`}>{props.description}</p>}
            {props.price ? <p>{props.price}</p> : <p className={`text-[rgb(255,0,0)] ${manrope.className}`}>Out of Stock</p>}
        </div>
    </div>
  )
}

export default OrderCard