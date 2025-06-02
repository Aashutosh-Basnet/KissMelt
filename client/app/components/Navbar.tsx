"use client"

import { IoIosSearch, IoIosCart } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import LoadingLink from "./ui/LoadingLink";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ORDER ONLINE", href: "/order" },
    { label: "CUSTOM ORDERS", href: "/custom-orders" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT US", href: "/contact" },
    { label: "POLICIES", href: "/policies" },
    { label: "CAREERS", href: "/careers" },
    { label: "MY ACCOUNT", href: "/account" },
  ];

  return (
    <nav className={`bg-[rgb(255,0,0)] w-full overflow-x-hidden ${manrope.className}`}>
      <div className="hidden lg:flex justify-end items-center px-3 py-3">
        <ul className="flex font-semibold gap-6 font-roboto text-white items-center m-5">
          {menuItems.slice(0, -1).map(({ label, href }, idx) => (
            <li key={idx} className="relative group">
              <LoadingLink href={href} className="text-sm whitespace-nowrap block pb-2">
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </LoadingLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6 text-white mx-6">
          <IoIosSearch className="cursor-pointer" size={18} />
          <GoPerson className="cursor-pointer" size={18} />
          <IoIosCart className="cursor-pointer" size={18} />
        </div>
      </div>

      <div className="lg:hidden flex justify-end items-center px-4 py-3">
        <div className="flex items-center gap-4 text-white">
          <IoIosSearch className="cursor-pointer" size={24} />
          <IoIosCart className="cursor-pointer" size={24} />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <RxHamburgerMenu size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[rgb(255,0,0)] w-full">
          <ul className="flex flex-col font-roboto text-white">
            {menuItems.map(({ label, href }, idx) => (
              <li key={idx} className="border-b border-red-500 last:border-none">
                <LoadingLink 
                  href={href} 
                  className="block px-4 py-3 hover:bg-red-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </LoadingLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
