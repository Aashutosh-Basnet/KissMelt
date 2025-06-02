"use client"

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdLocationOn, MdEdit } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

import { Playfair, Manrope } from "next/font/google";

const playfair = Playfair({
  weight: '900',
  subsets: ['latin']
});

const manrope = Manrope({
  subsets: ['latin']
});

interface PickUpCardProps {
  isOpen: boolean;
  onClose: () => void;
}

const PickUpCard: React.FC<PickUpCardProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('12:45 PM');

  const dates = [
    { label: 'Today', sublabel: 'May 31' },
    { label: 'Sun', sublabel: 'Jun 1' },
    { label: 'Mon', sublabel: 'Jun 2' },
    { label: 'Tue', sublabel: 'Jun 3' },
    { label: 'Wed', sublabel: 'Jun 4' },
    { label: 'Thu', sublabel: 'Jun 5' },
    { label: 'Fri', sublabel: 'Jun 6' },
  ];

  const times = [
    '12:45 PM',
    '1:00 PM',
    '1:15 PM',
    '1:30 PM',
    '1:45 PM',
    '2:00 PM',
    '2:15 PM',
    '2:35 PM',
    '2:45 PM',
    '3:00 PM',
    '3:15 PM',
    '3:30 PM',
    '3:45 PM',
    '4:00 PM',
    '4:00 PM',
    '4:00 PM',
    '4:00 PM',
    '4:00 PM',
    '4:00 PM',
    '4:00 PM',
  ];

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleOverlayClick}
    >
        <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[40vw] 2xl:max-w-[32vw] max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-[0_10px_25px_rgba(0,0,0,0.15)] scrollbar-hide">
        {/* Header */}
        <div className="w-full bg-red-500 h-[2vh]"></div>
        <div className="bg-white px-4 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-t-xl">
          <div className="flex items-center justify-between bg-gray-100 p-2 px-3 sm:px-4 rounded-full">
            <div className="flex items-center gap-2">
            <div className="m-1 sm:m-2 flex gap-2 sm:gap-3">
              <MdLocationOn size={16} className="text-gray-500" />
              <span className="text-sm sm:text-md font-medium text-gray-500 truncate">Pickup at 5646 Bay Street</span>
            </div>
            </div>
            <MdEdit size={16} className="text-red-500" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:px-16">
          <h2 className={`text-lg sm:text-xl lg:text-3xl font-extrabold mb-4 sm:mb-4 text-black ${playfair.className}`}>Schedule order</h2>
          
          {/* No minimum */}
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 border-b border-gray-400 w-full pb-6">
            <IoCheckmarkCircle className="text-green-500 text-lg sm:text-lg flex-shrink-0" />
            <span className={`text-black font-extralight text-md sm:text-md ${manrope.className}`}>No minimum</span>
          </div>

          {/* Select pickup time */}
          <div className="mb-6">
            <h3 className="text-sm sm:text-lg font-light mb-2 text-black">Select pickup time</h3>
            <p className={`text-black mb-4 sm:mb-6 text-base sm:text-sm font-extralight ${manrope.className}`}>Choose from the available timeslots for your order</p>
            
            {/* Date selector */}
            <div className="relative mb-6 sm:mb-8">
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {dates.map((date) => (
                  <button
                    key={date.label}
                    onClick={() => setSelectedDate(date.label)}
                    className={`flex-shrink-0 px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-center min-w-[60px] sm:min-w-[70px] ${manrope.className} font-medium ${
                      selectedDate === date.label
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-sm sm:text-sm font-semibold">{date.label}</div>
                    <div className="text-xs sm:text-sm">{date.sublabel}</div>
                  </button>
                ))}
              </div>
              <MdChevronRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hidden sm:block" size={24} />
            </div>

            {/* Time slots */}
            <div className="space-y-2 sm:space-y-4 max-h-[30vh] sm:max-h-none overflow-y-auto scrollbar-hide">
              {times.map((time, index) => (
                <label
                  key={`${time}-${index}`}
                  className="flex items-center gap-3 sm:gap-4 cursor-pointer py-3 sm:py-2 border-b border-gray-300"
                >
                  <div className="relative flex-shrink-0">
                    <input
                      type="radio"
                      name="pickup-time"
                      value={time}
                      checked={selectedTime === time}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black border-2 border-gray-300 focus:ring-2 focus:ring-black"
                    />
                    {selectedTime === time && (
                      <div className="absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <span className={`sm:text-sm text-black ${manrope.className} font-extralight`}>{time}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 flex items-center gap-6">
          <IoMdClose size={18} className="sm:w-5 sm:h-5 text-red-600" />
          <button
            onClick={onClose}
            className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-full text-base sm:text-sm font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 sm:gap-3"
          >
            <span className="truncate">Change Later ({selectedTime})</span>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PickUpCard;