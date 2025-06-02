import Socials from "./ui/Socials"
import Link from "next/link"
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
})

const Footer = () => {
  const menuItems = ["HOME", "ORDER ONLINE", "CUSTOM ORDERS", "ABOUT", "CONTACT US", "POLICIES", "CAREERS"];

  return (
    <footer className={`bg-red-600 text-white ${manrope.className} overflow-x-hidden p-5`}>
      <div className="mx-auto">
        <div className="flex flex-wrap md:flex-row justify-between py-8 md:py-8">
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <ul className="flex flex-wrap md:flex-row text-xs font-bold gap-4 md:gap-6 py-2">
              {menuItems.map((item, idx) => (
                <li key={idx} className="hover:text-pink-300 transition-colors">
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <Socials />
          </div>
        </div>

        <div className="border-t border-red-500 py-6 md:py-6">
          <p className={` ${manrope.className} text-center text-base lg:text-md`}>
            © 2024 Dipped, LLC
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer