import Invite from "./components/Invite"
import MarqueeText from "./components/ui/MarqueeText"
import Welcome from "./components/Welcome"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  weight: '900',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="overflow-x-hidden w-screen mx-auto">
      <div className="min-h-[50vh] md:min-h-[90vh] flex flex-col lg:flex-row bg-[#E7000B]">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-10">
          <Image 
            src="/images/home.png" 
            alt="home_img" 
            height={3665} 
            width={2449}
            className="w-full max-w-[80%] lg:max-w-full h-auto object-contain"
            priority
          />
        </div>
        <div className={`w-full lg:w-1/2 flex md:items-center md:justify-center p-4 lg:p-10 text-3xl md:text-4xl lg:text-5xl text-center lg:text-left ${playfair.className}`}>
          <p className="w-full lg:w-[75%]">
            SWEETENING LIFE&#39;S MOMENTS,
            <br className="hidden lg:block"/> 
            ONE CHOCOLATE DIPPED TREAT 
            <br className="hidden lg:block"/> 
            AT A TIME.
          </p>
        </div>
      </div>
      <MarqueeText />
      <Welcome />
      <Invite/>
    </div>
  )
}
