import { Playfair_Display, Manrope } from 'next/font/google'

const playfair = Playfair_Display({
  weight: '700',
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})

const Invite = () => {
  return (
    <div className="bg-red-600 py-8 md:py-12 lg:py-16">
      <div className="w-[90%] md:w-[80%] lg:w-[45vw] mx-auto px-4 text-center text-white">
        <h3 className={`text-3xl md:text-4xl lg:text-6xl font-bold mb-4 ${playfair.className}`}>
          JOIN THE DIPPED CLUB
        </h3>
        <p className={`text-xl md:text-2xl lg:text-3xl mb-6 lg:mb-8 ${manrope.className}`}>
          To find out about our latest treats and special offers!
        </p>
        
        <div className="flex flex-col sm:flex-row mx-auto gap-4 sm:gap-0">
          <input 
            type="email" 
            placeholder="Email"
            className="caret-white w-full sm:w-[75%] lg:w-[38vw] px-4 py-4 lg:py-6 rounded-lg sm:rounded-l-lg sm:rounded-r-none 
            text-black outline-none border border-red-400 sm:border-r-0 placeholder:text-red-300 
            text-lg md:text-xl lg:text-3xl"
          />
          <button className="bg-white text-black w-full sm:w-auto px-4 lg:px-6 py-3 lg:py-3 
          text-lg md:text-xl lg:text-2xl font-semibold rounded-lg sm:rounded-l-none sm:rounded-r-4xl
          hover:bg-pink-100 transition-colors">
            Sign Up
          </button>
        </div>

        <p className="text-sm md:text-base lg:text-xl text-red-300 mt-4">
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