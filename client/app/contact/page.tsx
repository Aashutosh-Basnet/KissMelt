import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";   
import Invite from '../components/Invite';
import PageWrapper from '../components/PageWrapper';

import { Playfair_Display, Manrope } from 'next/font/google'

const playfair = Playfair_Display({
  weight: '900',
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})

interface ContactContent {
  label: string;
  value: string;
  subtitle?: string;
}

interface ContactItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  content: ContactContent[];
}

const ContactPage = () => {
  const contactInfo: ContactItem[] = [
    {
      icon: MdEmail,
      title: "EMAIL US",
      content: [
        { label: "Bay Street Emeryville", value: "dippedemeryville@gmail.com" },
        { label: "Arden Fair Mall", value: "dippedardenfair@gmail.com" }
      ]
    },
    {
      icon: IoCall,
      title: "CALL US",
      content: [
        { label: "Bay Street Emeryville", value: "(510) 817-4645" },
        { label: "Arden Fair Mall", value: "Coming Soon" }
      ]
    },
    {
      icon: IoLocationSharp,
      title: "VISIT US",
      content: [
        { 
          label: "Bay Street Emeryville", 
          value: "5646 Bay Street, Emeryville, CA 94608",
          subtitle: "(Across from MINISO)"
        },
        { 
          label: "Arden Fair Mall", 
          value: "1689 Arden Way #1104, Sacramento, CA 95815",
          subtitle: "(Across from Sips & Scoops)"
        }
      ]
    },
    {
      icon: FaClock,
      title: "STORE HOURS",
      content: [
        { 
          label: "Bay Street Emeryville", 
          value: "Mon-Sat: 12:00pm-8:00pm\nSun: 11:00am-7:00pm"
        },
        { 
          label: "Arden Fair Mall", 
          value: "Mon-Sat: 10:00am-8:00pm\nSun: 11:00am-7:00pm"
        }
      ]
    }
  ];

  return (
    <PageWrapper className={`overflow-x-hidden ${manrope.className}`}>
      <div className='w-full bg-gradient-to-br from-pink-300 via-pink-200 to-red-100 text-black px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16'>
        
        {/* Header Section */}
        <div className='text-center mb-8 sm:mb-12 lg:mb-16'>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(255,0,0)] mb-4 ${playfair.className}`}>
            GET IN TOUCH
          </h1>
          <p className='text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            We&#39;d love to hear from you! Visit our locations, give us a call, or send us an email.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12'>
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10 group hover:scale-105'
                >
                  {/* Icon */}
                  <div className='flex justify-center mb-6'>
                    <div className='bg-red-50 p-4 sm:p-6 rounded-full group-hover:bg-red-100 transition-colors duration-300'>
                      <IconComponent 
                        size={60}
                        className='text-[rgb(255,0,0)] sm:w-16 sm:h-16 lg:w-20 lg:h-20' 
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800 ${playfair.className}`}>
                    {item.title}
                  </h3>

                  {/* Content */}
                  <div className='space-y-4 sm:space-y-6'>
                    {item.content.map((info, idx) => (
                      <div key={idx} className='text-center'>
                        <h4 className='text-base sm:text-lg lg:text-xl font-semibold text-[rgb(255,0,0)] mb-2'>
                          {info.label}
                        </h4>
                        {info.subtitle && (
                          <p className='text-sm sm:text-base text-gray-600 mb-1'>
                            {info.subtitle}
                          </p>
                        )}
                        <p className='text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line'>
                          {info.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

         
      </div>
      
      <Invite/>
    </PageWrapper>
  )
}

export default ContactPage;