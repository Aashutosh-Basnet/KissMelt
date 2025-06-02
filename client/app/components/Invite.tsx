import { Playfair_Display, Manrope } from 'next/font/google'

const playfair = Playfair_Display({
  weight: '900',
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})

const Invite = () => {
  return (
    <div className="bg-[rgb(255,0,0)] py-8 md:py-12 lg:py-16">
      <div className="w-[90%] md:w-[80%] lg:w-[55vw] mx-auto px-4 text-center text-white">
        <h3 className={`text-lg md:text-xl lg:text-3xl font-extrabold mb-4 ${playfair.className}`}>
          JOIN THE  CLUB
        </h3>
        <p className={`text-md md:text-lg mb-6 lg:mb-8 ${manrope.className}`}>
          To find out about our latest treats and special offers!
        </p>
        
        <div className="flex flex-col sm:flex-row mx-auto gap-4 sm:gap-0">
          <input 
            type="email" 
            placeholder="Email"
            className="caret-white lg:w-[45vw] px-4 py-4 lg:py-4 rounded-lg sm:rounded-l-2xl sm:rounded-r-none 
            text-black outline-none border border-red-400 sm:border-r-0 placeholder:text-red-300 
            text-md md:text-lg lg:text-xl"
          />
          <button className="bg-white text-black w-full sm:w-auto px-4 lg:px-6 lg:py-1
          text-sm md:text-md font-semibold rounded-lg sm:rounded-l-none sm:rounded-r-4xl
          hover:bg-pink-100 transition-colors">
            Sign Up
          </button>
        </div>

        <p className="text-sm md:text-base lg:text-sm text-red-300 mt-4">
          This form is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" 
             className="underline hover:no-underline hover:text-white transition-colors">
            Privacy Policy
          </a> and{' '}
          <a href="https://policies.google.com/terms" 
             className="underline hover:no-underline hover:text-white transition-colors">
            Terms of Service
          </a> apply.
        </p>
      </div>
    </div>
  )
}

export default Invite